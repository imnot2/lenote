/**
 * Node Couchbase Driver
 * by OrfeasZ
 *
 * @author Orfeas Zafeiris <i>orfeaz@gmail.com</i> (http://pointlimit.com)
 */

var MemcacheClient = require('./mcClient.js');
var events = require('events');

var MemcacheManager = function(p_Username, p_Password)
{
    this.Username = p_Username || '';
    this.Password = p_Password || '';

    this.MemcacheClients = {};

    this.setMaxListeners(0);
};

MemcacheManager.prototype = new events.EventEmitter();

MemcacheManager.prototype.Get = function(p_Identifier, p_Callback)
{
    if (this.MemcacheClients[p_Identifier] !== undefined)
    {
        if (this.MemcacheClients[p_Identifier].Connected)
        {
            p_Callback(this.MemcacheClients[p_Identifier].Client);
            return;
        }

        this.MemcacheClients[p_Identifier].Callbacks.push(p_Callback);
        return;
    }

    // Create a new Memcache Client
    var s_IdentifierParts = p_Identifier.split(':');

    this.MemcacheClients[p_Identifier] = {
        Callbacks: [ p_Callback ],
        Connected: false,
        Client: new MemcacheClient(s_IdentifierParts[0], s_IdentifierParts[1] || 11210, this.Username, this.Password)
    };

    this.MemcacheClients[p_Identifier].Client.Connect();

    var s_Self = this;
    var s_Returned = false;

    this.MemcacheClients[p_Identifier].Client.once('connected', function()
    {
        s_Returned = true;
        s_Self.MemcacheClients[p_Identifier].Connected = true;

        var s_Callback, s_Callbacks = s_Self.MemcacheClients[p_Identifier].Callbacks.slice(0);
        while (s_Callback = s_Callbacks.shift())
            s_Callback(this);

        s_Self.MemcacheClients[p_Identifier].Callbacks = null;
        delete s_Self.MemcacheClients[p_Identifier].Callbacks;

        // TODO: Should we print something?
        this.once('error', function() { s_Self.Remove(p_Identifier); });
    });

    this.MemcacheClients[p_Identifier].Client.once('timeout', function()
    {
        // A memcached client has timed out; we need to notify the couchbase client
        s_Self.emit('timeout', s_IdentifierParts[0]);

        s_Self.MemcacheClients[p_Identifier] = null;
        delete s_Self.MemcacheClients[p_Identifier];
    });

    this.MemcacheClients[p_Identifier].Client.once('destroyed', function()
    {
        s_Self.MemcacheClients[p_Identifier] = null;
        delete s_Self.MemcacheClients[p_Identifier];
    });

    this.MemcacheClients[p_Identifier].Client.once('error', function()
    {
        if (!s_Returned)
        {
            var s_Callback, s_Callbacks = s_Self.MemcacheClients[p_Identifier].Callbacks.slice(0);
            while (s_Callback = s_Callbacks.shift())
                s_Callback(null);

            s_Self.MemcacheClients[p_Identifier] = null;
            delete s_Self.MemcacheClients[p_Identifier];
        }
    });
};

MemcacheClient.prototype.Remove = function(p_Identifier)
{
    if (this.MemcacheClients[p_Identifier] !== undefined)
        return;

    if (this.MemcacheClients[p_Identifier].Connected)
        this.MemcacheClients[p_Identifier].Client.Destroy(0x02);
};

///

module.exports = MemcacheManager;