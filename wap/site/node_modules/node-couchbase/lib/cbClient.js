/**
 * Node Couchbase Driver
 * by OrfeasZ
 *
 * @author Orfeas Zafeiris <i>orfeaz@gmail.com</i> (http://pointlimit.com)
 */

var http = require('http');
var MemcacheManager = require('./mcManager.js');
var vBucketConfig = require('vbucket');
var events = require('events');
var async = require('async');
var util = require('util');

var CouchbaseClient = function(p_Hosts, p_Bucket, p_Password)
{
    if (p_Hosts.length == 0)
        throw new Error('You need to specify at least one Couchbase host.');

    this.Hosts = p_Hosts;
    this.Bucket = p_Bucket || 'default';
    this.Password = p_Password || '';
    this.SASLPassword = '';
    this.vBucketServerMap = {};
    this.vBucketConfig = null;
    this.Connected = false;
    this.KeyCache = {};
    this.CurrentHost = p_Hosts[0];
    this.ReconnectionAttempts = 0;

    this.InitConnection();
};

util.inherits(CouchbaseClient, events.EventEmitter);

CouchbaseClient.prototype.OnStreamConnectionClosed = function(p_Timeout)
{
    p_Timeout = p_Timeout || false;

    if (p_Timeout)
    {
        this.StreamClient.destroy();
    }

    ++this.ReconnectionAttempts;

    if (this.ReconnectionAttempts >= (this.Hosts.length > 5 ? this.Hosts.length : 5))
    {
        this.emit('error', 'Failed to connect to couchbase after ' + (this.Hosts.length > 5 ? this.Hosts.length : 5) + ' attempts.');
        return;
    }

    this.CurrentHost = this.Hosts[(this.Hosts.indexOf(this.CurrentHost) + 1) % this.Hosts.length];

    var s_Self = this;

    clearTimeout(this.ReconnectionTimeout);
    this.ReconnectionTimeout = setTimeout(function()
    {
        s_Self.InitConnection();
    }, 100);
};

CouchbaseClient.prototype.OnStreamDataReceived = function(p_Data)
{
    if (p_Data == '\n\n\n\n')
    {
        // Stream Finalized
        this.ParseStreamData(this.TempStreamData);
        this.TempStreamData = '';
        return;
    }

    this.TempStreamData += p_Data;
};

CouchbaseClient.prototype.ParseStreamData = function(p_Data)
{
    //console.log('Got final stream data!');
    //console.log(p_Data);

    var s_StreamData = JSON.parse(p_Data);

    this.SASLPassword = s_StreamData['saslPassword'] || '';
    this.vBucketServerMap = s_StreamData['vBucketServerMap'];
    this.vBucketConfig = new vBucketConfig(this.vBucketServerMap);

    // Clear the key cache
    this.KeyCache = {};

    if (!this.Connected)
    {
        this.Connected = true;
        this.ClientManager = new MemcacheManager(this.Bucket, this.SASLPassword);

        var s_Self = this;

        this.ClientManager.on('timeout', function(p_Identifier)
        {
            // A memcache client has timed out
            var s_HostIdentifierParts = s_Self.CurrentHost.split(':');
            if (p_Identifier == s_HostIdentifierParts[0])
            {
                s_Self.OnStreamConnectionClosed(true);
            }
        });

        this.emit('connected');
    }
};

CouchbaseClient.prototype.InitConnection = function()
{
    var s_Self = this;
    this.TempStreamData = '';

    this.StreamClient = http.get('http://' + this.Bucket + ':' + this.Password + '@' + this.CurrentHost + '/pools/default/bucketsStreaming/' + this.Bucket, function(p_Response)
    {
        if (p_Response.statusCode != 200)
        {
            this.destroy();
            s_Self.OnStreamConnectionClosed();
            return;
        }

        s_Self.ReconnectionAttempts = 0;
        p_Response.on('data', function(p_Data)
        {
            s_Self.OnStreamDataReceived(p_Data);
        })
        .once('close', function()
        {
            s_Self.OnStreamConnectionClosed();
        });
    })
    .once('error', function(p_Error)
    {
        s_Self.OnStreamConnectionClosed();
    });
};

CouchbaseClient.prototype.GetClientForKey = function(p_Key, p_Callback)
{
    if (this.KeyCache[p_Key] === undefined)
    {
        this.KeyCache[p_Key] = this.vBucketConfig.Map(p_Key);
    }

    this.ClientManager.Get(this.KeyCache[p_Key].Server, function(p_Client)
    {
        p_Callback(p_Key, p_Client);
    });
};

CouchbaseClient.prototype.GetvBucketIDForKey = function(p_Key) {
    if (this.KeyCache[p_Key] === undefined)
    {
        this.KeyCache[p_Key] = this.vBucketConfig.Map(p_Key);
    }

    return this.KeyCache[p_Key].vBucketID;
};

/**
 * Get the value of a key
 * @param {String} p_Key Document ID used to identify the value
 * @param p_Callback Callback function or method to be called
 */
CouchbaseClient.prototype.Get = function(p_Key, p_Callback)
{
    var s_Self = this;

    this.GetClientForKey(p_Key, function(p_Identifier, p_Client)
    {
        if (p_Client === null)
        {
            p_Callback(0xBEE5);
            return;
        }

        p_Client.Get(p_Key, p_Callback, s_Self.GetvBucketIDForKey(p_Key));
    });
};

/**
 * Store a value using the specified key, whether the key already exists or not. Will overwrite a value if the given key/value already exists.
 * @param {String} p_Key Document ID used to identify the value
 * @param {Object|String|Number} p_Value Value to be stored
 * @param [p_Callback] Callback function or method to be called
 * @param {Buffer} [p_Meta] Unique value used to verify a key/value combination
 * @param {Number} [p_Expiration] Expiration time for key (in seconds)
 */
CouchbaseClient.prototype.Set = function(p_Key, p_Value, p_Callback, p_Meta, p_Expiration)
{
    var s_Self = this;

    this.GetClientForKey(p_Key, function(p_Identifier, p_Client)
    {
        if (p_Client === null)
        {
            p_Callback(0xBEE5);
            return;
        }

        p_Client.Set(p_Key, p_Value, p_Callback, p_Meta, p_Expiration, s_Self.GetvBucketIDForKey(p_Key));
    });
};

/**
 * Get one or more key values
 * @param {Array} p_Keys
 * @param p_Callback Callback function or method to be called
 */
CouchbaseClient.prototype.GetMulti = function(p_Keys, p_Callback)
{
    var s_Self = this;

    async.map(p_Keys, function(p_Key, p_AsyncCallback)
    {
        s_Self.GetClientForKey(p_Key, function(p_Identifier, p_Client)
        {
            p_AsyncCallback(null, [ p_Identifier, p_Client ]);
        });
    }, function(p_Error, p_Results){
        // Categorize requests to clients
        var s_Clients = {};
        var s_ClientCount = 0;

        var s_Result, s_Results = p_Results.slice(0);
        while (s_Result = s_Results.shift())
        {
            if (s_Clients[s_Result[1].Identifier] === undefined)
            {
                s_Clients[s_Result[1].Identifier] = {
                    Client: s_Result[1],
                    Keys: []
                };
                ++s_ClientCount;
            }
            s_Clients[s_Result[1].Identifier].Keys.push(s_Result[0]);
        }

        var s_CollectedValues = {};
        var s_CollectedMetas = {};
        var s_ResponseCount = 0;

        var s_MultiCallback = function(p_Error, p_Values, p_Metas)
        {
            ++s_ResponseCount;

            for (var s_Key in p_Values)
            {
                s_CollectedValues[s_Key] = p_Values[s_Key];
                s_CollectedMetas[s_Key] = p_Metas[s_Key];
            }

            if (p_Error || s_ResponseCount == s_ClientCount)
                if (typeof p_Callback == 'function')
                    p_Callback(p_Error, s_CollectedValues, s_CollectedMetas);
        };

        // Execute the requests
        for (var s_Client in s_Clients)
        {
            var s_vBucketIDs = {};

            var s_Key, s_Keys = s_Clients[s_Client].Keys.slice(0);
            while (s_Key = s_Keys.shift())
                s_vBucketIDs[s_Key] = s_Self.GetvBucketIDForKey(s_Key);

            s_Clients[s_Client].Client.GetMulti(s_Clients[s_Client].Keys, s_MultiCallback, s_vBucketIDs)
        }
    });
};

/**
 * Set multiple key/value items at once
 * @param {Object} p_SetData List of data to set; format: { Key: <key>, Value: <val> [, Meta: <meta>, Expire: <expiry> ]}
 * @param [p_Callback] Callback function or method to be called
 */
CouchbaseClient.prototype.SetMulti = function(p_SetData, p_Callback)
{
    var s_Self = this;

    async.map(p_SetData, function(p_SetDataItem, p_AsyncCallback)
    {
        s_Self.GetClientForKey(p_SetDataItem.Key, function(p_Identifier, p_Client)
        {
            p_AsyncCallback(null, [ p_SetDataItem, p_Client ]);
        });
    }, function(p_Error, p_Results){
        // Categorize requests to clients
        var s_Clients = {};
        var s_ClientCount = 0;

        var s_Result, s_Results = p_Results.slice(0);
        while (s_Result = s_Results.shift())
        {
            if (s_Clients[s_Result[1].Identifier] === undefined)
            {
                s_Clients[s_Result[1].Identifier] = {
                    Client: s_Result[1],
                    Keys: []
                };
                ++s_ClientCount;
            }
            s_Clients[s_Result[1].Identifier].Keys.push(s_Result[0]);
        }

        var s_ResponseCount = 0;

        var s_MultiCallback = function(p_Error)
        {
            ++s_ResponseCount;

            if (s_ResponseCount == s_ClientCount)
                if (typeof p_Callback == 'function')
                    p_Callback(p_Error);
        };

        // Execute the requests
        for (var s_Client in s_Clients)
        {
            var s_vBucketIDs = {};

            var s_Key, s_Keys = s_Clients[s_Client].Keys.slice(0);
            while (s_Key = s_Keys.shift())
                s_vBucketIDs[s_Key.Key] = s_Self.GetvBucketIDForKey(s_Key.Key);

            s_Clients[s_Client].Client.SetMulti(s_Clients[s_Client].Keys, s_MultiCallback, s_vBucketIDs)
        }
    });
};


module.exports = CouchbaseClient;