/**
 * Node Couchbase Driver
 * by OrfeasZ
 *
 * @author Orfeas Zafeiris <i>orfeaz@gmail.com</i> (http://pointlimit.com)
 */

var net = require('net');
var MemcachePacket = require('./net/mcPacket.js');
var Queue = require('./utils/Queue.js');
var MemcacheEnums = require('./mcEnums.js');
var events = require('events');
var binutils = require('binutils-hiperf');
var util = require('util');

/**
 * Creates a new Memcache Client
 * @param {String|null} p_Host The Memcache server hostname or IP
 * @param {Number|null} p_Port The Memcache server port
 * @param {String} p_Username The username used to connect to the Memcache server
 * @param {String|null} p_Password The password used to connect to the Memcache server
 * @constructor
 */
var MemcacheClient = function(p_Host, p_Port, p_Username, p_Password)
{
    // Set the client connection properties
    this.Host = p_Host || 'localhost';
    this.Port = p_Port || 11210;
    this.Username = p_Username;
    this.Password = p_Password || '';
    this.ReconnectionThreshold = 250;
    this.Reconnecting = false;
    this.Connected = false;

    // Create an identifier based on host:port
    this.Identifier = this.Host + ':' + this.Port;

    // Create our socket
    this.Socket = new net.Socket();

    this.setMaxListeners(0);
};

util.inherits(MemcacheClient, events.EventEmitter);

MemcacheClient.prototype.Destroy = function(p_DestructionType)
{
    this.Connected = false;

    this.Socket.destroy();

    switch(p_DestructionType)
    {
        case 0x01: // error
            if (this.ReconnectionThreshold == 250)
            {
                // We failed in the first attempt
                this.emit('error');
            }
            else
            {
                // Initiate a reconnection attempt
                var s_Self = this;
                setTimeout(function()
                {
                    s_Self.Reconnect();
                }, this.ReconnectionThreshold);
            }

            break;
        case 0x02: // end
            this.emit('destroyed');
            break;
        case 0x03: // timeout
            this.emit('timeout');
            break;
    }

    this.removeAllListeners('connected');
    this.removeAllListeners('destroyed');
    this.removeAllListeners('error');
    this.removeAllListeners('timeout');
};

MemcacheClient.prototype.Reconnect = function()
{
    if (this.Reconnecting)
        return;

    this.Reconnecting = true;

    if (this.Socket !== undefined)
    {
        this.Socket.removeAllListeners('data');
        this.Socket.removeAllListeners('error');
        this.Socket.removeAllListeners('end');
        this.Socket.removeAllListeners('timeout');
    }

    this.ReconnectionThreshold *= 1.5;

    if (this.ReconnectionThreshold > 1000)
    {
        this.Destroy(0x03);
        return;
    }

    this.Socket = new net.Socket();

    this.Connect();
};

/**
 * Establish a connection to the Memcache server
 */
MemcacheClient.prototype.Connect = function()
{
    var s_Self = this;

    this.Socket.setTimeout(20000);

    this.Socket.connect(this.Port, this.Host, function()
    {
        // Client connected; start the authentication sequence
        s_Self.Reconnecting = false;
        s_Self.Connected = true;
        s_Self.ReconnectionThreshold = 250;
        s_Self.GetSASLMechanisms();
        s_Self.DoPing();
    });

    // Setup our temp data and packet holders
    this.PendingPacket = null;
    this.TemporaryData = null;
    this.PacketHandlers = {};
    this.PacketID = 0;

    // Setup event listeners
    this.Socket.on('data', function(p_Data)
    {
        s_Self.OnReceivedData(p_Data);
    });

    // Handle errors
    this.Socket.on('error', function(p_Error)
    {
        //console.log('Error on socket:');
        //console.log(p_Error);
        s_Self.Destroy(0x01 /* error */);
    });

    // Handle disconnection
    this.Socket.on('end', function()
    {
        //console.log('Connection ended.');
        s_Self.Destroy(0x02 /* end */);
    });

    // Handle timeouts
    this.Socket.on('timeout', function()
    {
        // Connection timed out
        s_Self.Destroy(0x03 /* timeout */);
    });
};

MemcacheClient.prototype.DoPing = function()
{
    var s_Self = this;

    clearTimeout(this.PingTimeout);
    this.PingTimeout = setTimeout(function()
    {
        s_Self.NoOp(function()
        {
            s_Self.DoPing();
        });
    }, 15000);
};

MemcacheClient.prototype.OnReceivedData = function(p_Data)
{
    // Received data from the stream
    if (this.PendingPacket === null && this.TemporaryData === null)
    {
        if (p_Data.length >= 24)
        {
            this.PendingPacket = new MemcachePacket({ ByteBuffer: p_Data.slice(0, 24) });

            if (!this.PendingPacket.Valid)
                this.PendingPacket = null;

            this.TemporaryData = p_Data.slice(24);
        }
        else
        {
            this.TemporaryData = p_Data;
        }
    }
    else if (this.PendingPacket === null && this.TemporaryData !== null)
    {
        if (p_Data !== null)
            this.TemporaryData = Buffer.concat([this.TemporaryData, p_Data]);

        if (this.TemporaryData.length >= 24)
        {
            this.PendingPacket = new MemcachePacket({ ByteBuffer: this.TemporaryData.slice(0, 24) });

            if (!this.PendingPacket.Valid)
                this.PendingPacket = null;

            this.TemporaryData = this.TemporaryData.slice(24);
        }
    }
    else if (this.PendingPacket !== null && this.TemporaryData !== null)
    {
        if (p_Data !== null)
            this.TemporaryData = Buffer.concat([this.TemporaryData, p_Data]);
    }

    if (this.PendingPacket !== null && this.TemporaryData !== null && this.PendingPacket.Header.TotalLength <= this.TemporaryData.length)
    {
        this.PendingPacket.ParseData(this.TemporaryData.slice(0, this.PendingPacket.Header.TotalLength));

        if (this.PendingPacket.Valid)
            this.RouteResponse(this.PendingPacket);

        if (this.TemporaryData.length > this.PendingPacket.Header.TotalLength)
        {
            this.TemporaryData = this.TemporaryData.slice(this.PendingPacket.Header.TotalLength);
            this.PendingPacket = null;
            this.OnReceivedData(null);
        }
        else
        {
            this.PendingPacket = null;
            this.TemporaryData = null;
        }
    }
};

MemcacheClient.prototype.RouteResponse = function(p_Packet)
{
    var s_FinalData = null;
    switch (p_Packet.Header.Opcode)
    {
        case 0x00: // Get
            s_FinalData = this.FilterGet(p_Packet);
            break;
        case 0x01: // Set
            s_FinalData = this.FilterSet(p_Packet);
            break;
        case 0x02: // Add
            s_FinalData = this.FilterAdd(p_Packet);
            break;
        case 0x03: // Replace
            s_FinalData = this.FilterReplace(p_Packet);
            break;
        case 0x04: // Delete
            s_FinalData = this.FilterDelete(p_Packet);
            break;
        case 0x05: // Increment
            s_FinalData = this.FilterIncrement(p_Packet);
            break;
        case 0x06: // Decrement
            s_FinalData = this.FilterDecrement(p_Packet);
            break;
        case 0x07: // Quit
            s_FinalData = this.FilterQuit(p_Packet);
            break;
        case 0x08: // Flush
            s_FinalData = this.FilterFlush(p_Packet);
            break;
        case 0x09: // GetQ
            s_FinalData = this.FilterGetQ(p_Packet);
            break;
        case 0x0A: // NoOp
            s_FinalData = this.FilterNoOp(p_Packet);
            break;
        case 0x0B: // Version
            s_FinalData = this.FilterVersion(p_Packet);
            break;
        case 0x0E: // Append
            s_FinalData = this.FilterAppend(p_Packet);
            break;
        case 0x0F: // Prepend
            s_FinalData = this.FilterPrepend(p_Packet);
            break;
        case 0x10: // Stat
            s_FinalData = this.FilterStat(p_Packet);
            break;
        case 0x11: // SetQ
            s_FinalData = this.FilterSetQ(p_Packet);
            break;
        case 0x12: // AddQ
            s_FinalData = this.FilterAddQ(p_Packet);
            break;
        case 0x13: // ReplaceQ
            s_FinalData = this.FilterReplaceQ(p_Packet);
            break;
        case 0x14: // DeleteQ
            s_FinalData = this.FilterDeleteQ(p_Packet);
            break;
        case 0x15: // IncrementQ
            s_FinalData = this.FilterIncrementQ(p_Packet);
            break;
        case 0x16: // DecrementQ
            s_FinalData = this.FilterDecrementQ(p_Packet);
            break;
        case 0x19: // AppendQ
            s_FinalData = this.FilterAppendQ(p_Packet);
            break;
        case 0x1A: // PrependQ
            s_FinalData = this.FilterPrependQ(p_Packet);
            break;
        case 0x1C: // Touch
            s_FinalData = this.FilterTouch(p_Packet);
            break;
        case 0x20: // SASLListMechs
            s_FinalData = this.FilterSASLListMechs(p_Packet);
            break;
        case 0x21: // SASLAuth
            s_FinalData = this.FilterSASLAuth(p_Packet);
            break;
    }


    if (this.PacketHandlers[p_Packet.Header.Opaque] !== undefined)
    {
        clearTimeout(this.PacketHandlers[p_Packet.Header.Opaque].Timeout);
        this.PacketHandlers[p_Packet.Header.Opaque].Callback(s_FinalData.Error, s_FinalData.Data, this.PacketHandlers[p_Packet.Header.Opaque].SecondaryKey);

        this.PacketHandlers[p_Packet.Header.Opaque] = null;
        delete this.PacketHandlers[p_Packet.Header.Opaque];
    }
};

MemcacheClient.prototype.SendRequest = function(p_Operation, p_Options, p_Callback)
{
    var s_Self = this;

    var s_PacketID = ++this.PacketID;
    
    if (s_PacketID > 1000000000)
        this.PacketID = 0;

    this.PacketHandlers[s_PacketID] = {
        Callback: p_Callback,
        SecondaryKey: p_Options.SecondaryKey,

        // Timeout the response after 2 seconds
        // TODO: Make this configurable
        Timeout: setTimeout(function()
            {
                p_Callback(0xDEAD, null, p_Options.Key);
                s_Self.PacketHandlers[s_PacketID] = null;
                delete s_Self.PacketHandlers[s_PacketID];
            }, 2000)
    };

    var s_Packet = new MemcachePacket({
            Operation: p_Operation,
            Key: p_Options.Key,
            Extras: p_Options.Extras,
            Data: p_Options.Data,
            vBucketID: p_Options.vBucketID,
            Opaque: s_PacketID,
            CAS: p_Options.CAS
    });

    this.Socket.write(s_Packet.ByteBuffer);
};

MemcacheClient.prototype.ThrowError = function(p_ErrorType, p_ErrorData)
{
    this.emit('error', {
        Type: p_ErrorType,
        Data: p_ErrorData || null
    })
};

//region Memcache Requests

MemcacheClient.prototype.GetSASLMechanisms = function()
{
    var s_Self = this;

    this.SendRequest(0x20, {}, function(p_Error, p_Data)
    {
        if (p_Error != 0x00)
        {
            s_Self.ThrowError(MemcacheEnums.Errors.get(p_Error).key, 'Failed to get SASL mechanisms.');
            return;
        }

        if (p_Data.indexOf('PLAIN') != -1)
        {
            s_Self.PerformPlainSASLAuth();
            return;
        }

        s_Self.ThrowError('UnknownSASLMech', 'Unknown SASL mechanism "' + p_Data + '".');
    });
};

MemcacheClient.prototype.PerformPlainSASLAuth = function()
{
    var s_Self = this;

    this.SendRequest(0x21, {
        Key: 'PLAIN',
        Data: this.Username + '\0' + this.Username + '\0' + this.Password
    }, function(p_Error, p_Data)
    {
        if (p_Error != 0x00)
        {
            s_Self.ThrowError(MemcacheEnums.Errors.get(p_Error).key, 'Failed to authenticate with Memcache.');
            return;
        }

        switch (p_Data)
        {
            case 'Authenticated':
                s_Self.emit('connected');
                break;
            default:
                s_Self.ThrowError('AuthenticationError', 'Failed to authenticate with Memcache with response "' + p_Data + '".');
                break;
        }
    });
};

MemcacheClient.prototype.Get = function(p_Key, p_Callback, p_vBucketID)
{
    this.SendRequest(0x00, {
        Key: p_Key,
        vBucketID: p_vBucketID
    }, function(p_Error, p_Data)
    {
        if (p_Callback === undefined || typeof(p_Callback) != 'function') return;
        if (p_Error != 0x0000) { p_Callback(p_Error); return; }

        p_Callback(p_Error, p_Data.Value, p_Data.Meta);
    });

};

MemcacheClient.prototype.Set = function(p_Key, p_Value, p_Callback, p_Meta, p_Expiration, p_vBucketID)
{
    var s_ExtraWriter = new binutils.BinaryWriter(8);
    s_ExtraWriter.WriteUInt32(0xDEADBEEF);
    s_ExtraWriter.WriteUInt32(p_Expiration || 0);

    this.SendRequest(0x01, {
        Key: p_Key,
        Extras: s_ExtraWriter.ByteBuffer,
        CAS: p_Meta,
        Data: (typeof(p_Value) == 'string') ? p_Value : JSON.stringify(p_Value),
        vBucketID: p_vBucketID
    }, function(p_Error, p_Data)
    {
        if (p_Callback === undefined || typeof(p_Callback) != 'function') return;
        if (p_Error != 0x0000) { p_Callback(p_Error); return; }

        p_Callback(p_Error, p_Data);
    });
};

MemcacheClient.prototype.GetMulti = function(p_Keys, p_Callback, p_vBucketIDs)
{
    var s_Values = {};
    var s_Metas = {};

    var s_GetMultiCB = function(p_Error, p_Data, p_SecondaryKey)
    {
        if (p_SecondaryKey == p_Keys[p_Keys.length - 1])
        {

            if (p_Callback === undefined || typeof(p_Callback) != 'function') return;
            if (p_Error != 0x0000) { p_Callback(p_Error, s_Values, s_Metas); return; }

            s_Values[p_SecondaryKey] = p_Data.Value;
            s_Metas[p_SecondaryKey] = p_Data.Meta;

            p_Callback(p_Error, s_Values, s_Metas);
        }

        if (p_Error != 0x0000)
            return;

        s_Values[p_SecondaryKey] = p_Data.Value;
        s_Metas[p_SecondaryKey] = p_Data.Meta;
    };

    var s_Key, s_Keys = p_Keys.slice(0);
    while (s_Key = s_Keys.shift())
    {
        s_Values[s_Key] = null;
        s_Metas[s_Key] = null;

        this.SendRequest((s_Key == p_Keys[p_Keys.length - 1]) ? 0x00 : 0x09, {
            Key: s_Key,
            SecondaryKey: s_Key,
            vBucketID: p_vBucketIDs[s_Key]
        }, s_GetMultiCB);
    }
};

MemcacheClient.prototype.SetMulti = function(p_SetData, p_Callback, p_vBucketIDs)
{
    var s_SetMultiCB = function(p_Error, p_Data, p_SecondaryKey)
    {
        if (p_SecondaryKey == p_SetData[p_SetData.length - 1].Key)
        {
            if (p_Callback === undefined || typeof(p_Callback) != 'function') return;
            if (p_Error != 0x0000) { p_Callback(p_Error); return; }


            p_Callback(p_Error);
        }
    };

    var s_SetDataItem, s_SetData = p_SetData.slice(0);
    while (s_SetDataItem = s_SetData.shift())
    {
        var s_ExtraWriter = new binutils.BinaryWriter(8);
        s_ExtraWriter.WriteUInt32(0xDEADBEEF);
        s_ExtraWriter.WriteUInt32(s_SetDataItem.Expire || 0);

        this.SendRequest((s_SetDataItem == p_SetData[p_SetData.length - 1]) ? 0x01 : 0x11, {
            Key: s_SetDataItem.Key,
            SecondaryKey: s_SetDataItem.Key,
            Extras: s_ExtraWriter.ByteBuffer,
            CAS: s_SetDataItem.Meta,
            Data: (typeof(s_SetDataItem.Value) == 'string') ? s_SetDataItem.Value : JSON.stringify(s_SetDataItem.Value),
            vBucketID: p_vBucketIDs[s_SetDataItem.Key]
        }, s_SetMultiCB);
    }
};

MemcacheClient.prototype.NoOp = function(p_Callback)
{
    this.SendRequest(0x0A, {
        Key: '',
        Data: ''
    }, function(p_Error, p_Data)
    {
        if (p_Callback === undefined || typeof(p_Callback) != 'function') return;
        if (p_Error != 0x0000) { p_Callback(p_Error); return; }

        p_Callback(p_Error, p_Data);
    });
};

//endregion

//region Response Filters

MemcacheClient.prototype.FilterGet = function(p_Packet)
{
    var s_Data = null;

    if (p_Packet.Header.Status == 0x00)
    {
        //console.log('Get size: ' + p_Packet.Data.length);
        s_Data = p_Packet.Data.toString();
        if (/^[\],:{}\s]*$/
                .test(s_Data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            s_Data = JSON.parse(s_Data);
        }
    }

    return { Error: p_Packet.Header.Status, Data: { Value: s_Data, Meta: p_Packet.Header.CAS } };
};

MemcacheClient.prototype.FilterGetQ = function(p_Packet)
{
    var s_Data = null;

    if (p_Packet.Header.Status == 0x00)
    {
        s_Data = p_Packet.Data.toString();
        if (/^[\],:{}\s]*$/
            .test(s_Data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            s_Data = JSON.parse(s_Data);
        }
    }

    return { Error: p_Packet.Header.Status, Data: { Value: s_Data, Meta: p_Packet.Header.CAS } };
};

MemcacheClient.prototype.FilterSet = function(p_Packet)
{
    return { Error: p_Packet.Header.Status, Data: p_Packet.Header.CAS };
};

MemcacheClient.prototype.FilterSetQ = function(p_Packet)
{
    return { Error: p_Packet.Header.Status, Data: p_Packet.Header.CAS };
};

MemcacheClient.prototype.FilterSASLListMechs = function(p_Packet)
{
    return { Error: p_Packet.Header.Status, Data: p_Packet.Data.toString() };
};

MemcacheClient.prototype.FilterSASLAuth = function(p_Packet)
{
    return { Error: p_Packet.Header.Status, Data: p_Packet.Data.toString() };
};

MemcacheClient.prototype.FilterNoOp = function(p_Packet)
{
    return { Error: p_Packet.Header.Status, Data: null };
};

//endregion


module.exports = MemcacheClient;