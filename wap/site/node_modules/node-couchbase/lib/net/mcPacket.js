/**
 * Node Couchbase Driver
 * by OrfeasZ
 *
 * @author Orfeas Zafeiris <i>orfeaz@gmail.com</i> (http://pointlimit.com)
 */

var binutils = require('binutils-hiperf');

/**
 * Creates and either parses or constructs a Memcache Packet based on the provided data
 * @param {Object} p_Options
 * @constructor
 */
var MemcachePacket = function(p_Options)
{
    this.Valid = false;

    if (p_Options.ByteBuffer !== undefined)
    {
        this.ParseResponseHeader(p_Options.ByteBuffer);
        return;
    }

    this.FormRequest(p_Options);
};

/**
 * Parses the header of a Memcache Response Packet
 * @param {Buffer} p_Data
 */
MemcachePacket.prototype.ParseResponseHeader = function(p_Data)
{
    // This ain't even close to a valid packet. Are you kidding me?
    if (p_Data.length < 24) {
        return;
    }

    // Initialize a Reader for our binary packet data
    var s_Reader = new binutils.BinaryReader(p_Data);

    // Parse the packet header
    this.Header = {
        Magic: s_Reader.ReadUInt8(),
        Opcode: s_Reader.ReadUInt8(),
        KeyLength: s_Reader.ReadUInt16(),
        ExtrasLength: s_Reader.ReadUInt8(),
        DataType: s_Reader.ReadUInt8(),
        Status: s_Reader.ReadUInt16(),
        TotalLength: s_Reader.ReadUInt32(),
        Opaque: s_Reader.ReadUInt32(),
        CAS: s_Reader.ReadBytes(8)
    };

    // Check if the server is drunk and sending us requests instead of responses
    if (this.Header.Magic != 0x81 /* PROTOCOL_BINARY_RES */)
        return;

    // Check if our datatype is valid
    if (this.Header.DataType != 0x00)
        return;

    // And we have now verified that our packet is valid (or at least so it seems)
    this.Valid = true;
};

/**
 * Parses the data of the Memcache Packet from the given Buffer
 * @param {Buffer} p_Data
 */
MemcachePacket.prototype.ParseData = function(p_Data)
{
    if (p_Data.length != this.Header.TotalLength)
    {
        this.Valid = false;
        return;
    }

    var s_Reader = new binutils.BinaryReader(p_Data);

    // Read the Extra Data (if any)
    this.Extras = (this.Header.ExtrasLength > 0) ? s_Reader.ReadBytes(this.Header.ExtrasLength) : undefined;

    // Read the Key (if any)
    this.Key = (this.Header.KeyLength > 0) ? s_Reader.ReadBytes(this.Header.KeyLength).toString() : undefined;

    // Read the Data (if any)
    var s_DataLength = this.Header.TotalLength - (this.Header.KeyLength + this.Header.ExtrasLength);
    this.Data = (s_DataLength > 0) ? s_Reader.ReadBytes(s_DataLength) : undefined;
};

/**
 * Constructs a Memcache Packet using the provided data
 * @param {Object} p_Options
 */
MemcachePacket.prototype.FormRequest = function(p_Options)
{
    this.Valid = true;

    // Create empty buffers for undefined data
    p_Options['Key'] = p_Options['Key'] || new Buffer(0);
    p_Options['Extras'] = p_Options['Extras'] || new Buffer(0);
    p_Options['Data'] = p_Options['Data'] || new Buffer(0);

    // Compute the total data length
    var s_TotalDataLength = p_Options['Key'].length + p_Options['Extras'].length + p_Options['Data'].length;

    // Default values
    p_Options['DataType'] = 0x00; // RawBytes
    p_Options['vBucketID'] = p_Options['vBucketID'] || 0x0000;
    p_Options['Opaque'] = p_Options['Opaque'] || 0x00000000;
    p_Options['CAS'] = p_Options['CAS'] || new Buffer([0, 0, 0, 0, 0, 0, 0, 0]);

    if (p_Options['CAS'].length != 8)
        p_Options['CAS'] = new Buffer([0, 0, 0, 0, 0, 0, 0, 0]);

    // Initialize our writer
    var s_Writer = new binutils.BinaryWriter(24 + s_TotalDataLength);

    // Write the Packet Header
    s_Writer.WriteUInt8(0x80); /* PROTOCOL_BINARY_REQ */
    s_Writer.WriteUInt8(p_Options['Operation']);
    s_Writer.WriteUInt16(p_Options['Key'].length);
    s_Writer.WriteUInt8(p_Options['Extras'].length);
    s_Writer.WriteUInt8(p_Options['DataType']);
    s_Writer.WriteUInt16(p_Options['vBucketID']);
    s_Writer.WriteUInt32(s_TotalDataLength);
    s_Writer.WriteUInt32(p_Options['Opaque']);
    s_Writer.WriteBytes(p_Options['CAS']);

    // Write the Packet Data
    s_Writer.WriteBytes(p_Options['Extras']);
    s_Writer.WriteBytes(p_Options['Key']);
    s_Writer.WriteBytes(p_Options['Data']);

    // And set the final buffer
    this.ByteBuffer = s_Writer.ByteBuffer;
};

module.exports = MemcachePacket;