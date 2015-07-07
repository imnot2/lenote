/**
 * Node Couchbase Driver
 * by OrfeasZ
 *
 * @author Orfeas Zafeiris <i>orfeaz@gmail.com</i> (http://pointlimit.com)
 */

var Enum = require('enum');

/**
 * Enums used in Memcache Packets
 * @type {{Magic: Enum, ResponseStatus: Enum, CommandOpcodes: Enum, DataTypes: Enum}}
 */
var MemcacheEnums = {
    Magic: new Enum({
        RequestPacket: 0x80,
        ResponsePacket: 0x81
    }),

    ResponseStatus: new Enum({
        NoError: 0x0000,
        KeyNotFound: 0x0001,
        KeyExists: 0x0002,
        ValueTooLarge: 0x0003,
        InvalidArguments: 0x0004,
        ItemNotStored: 0x0005,
        IncrDecrOnNonNumeric: 0x0006,
        VBucketOnOtherServer: 0x0007,
        AuthenticationError: 0x0020,
        AuthenticationContinue: 0x0021,
        InvalidRange: 0x0022,
        UnknownCommand: 0x0081,
        OutOfMemory: 0x0082,
        NotSupported: 0x0083,
        InternalError: 0x0084,
        Busy: 0x0085,
        TemporaryFailure: 0x0086
    }),

    CommandOpcodes: new Enum({
        Get: 0x00,
        Set: 0x01,
        Add: 0x02,
        Replace: 0x03,
        Delete: 0x04,
        Increment: 0x05,
        Decrement: 0x06,
        Quit: 0x07,
        Flush: 0x08,
        GetQ: 0x09,
        NoOp: 0x0A,
        Version: 0x0B,
        GetK: 0x0C,
        GetKQ: 0x0D,
        Append: 0x0E,
        Prepend: 0x0F,
        Stat: 0x10,
        SetQ: 0x11,
        AddQ: 0x12,
        ReplaceQ: 0x13,
        DeleteQ: 0x14,
        IncrementQ: 0x15,
        DecrementQ: 0x16,
        QuitQ: 0x17,
        FlushQ: 0x18,
        AppendQ: 0x19,
        PrependQ: 0x1A,
        Verbosity: 0x1B,
        Touch: 0x1C,
        GAT: 0x1D,
        GATQ: 0x1E,
        SASLListMechs: 0x20,
        SASLAuth: 0x21,
        SASLStep: 0x22,
        RGet: 0x30,
        RSet: 0x31,
        RSetQ: 0x32,
        RAppend: 0x33,
        RAppendQ: 0x34,
        RPrepend: 0x35,
        RPrependQ: 0x36,
        RDelete: 0x37,
        RDeleteQ: 0x38,
        RIncr: 0x39,
        RIncrQ: 0x3A,
        RDecr: 0x3B,
        RDecrQ: 0x3C,
        SetVBucket: 0x3D,
        GetVBucket: 0x3E,
        DelVBucket: 0x3F,
        TAPConnect: 0x40,
        TAPMutation: 0x41,
        TAPDelete: 0x42,
        TAPFlush: 0x43,
        TAPOpaque: 0x44,
        TAPVBucketSet: 0x45,
        TAPCheckpointStart: 0x46,
        TAPCheckpointEnd: 0x47
    }),

    DataTypes: new Enum({
        RawBytes: 0x00
    }),

    Errors: new Enum({
        NoError: 0x0000
    })
};

module.exports = MemcacheEnums;

