var CouchbaseClient = require('./lib/cbClient.js');

console.log('Connecting to the Couchbase instance.');

var s_Client = new CouchbaseClient([ 'localhost:8091' ], 'bucket', 'password').on('connected', function()
{
    console.log('Connected and authenticated with couchbase 1.');

    // Get Example
    this.Get('test1', function(p_Error, p_Data, p_Meta)
    {
        console.log('Get test1!');
        console.log(p_Error);
        console.log(p_Data);
        console.log(p_Meta);
        console.log('---');
    });

    // Set Example
    this.Set('test1', {
        some: 'test',
        data: true
    }, function(p_Error, p_Meta)
    {
        console.log('Set test1');
        console.log(p_Error);
        console.log(p_Meta);
        console.log('---');
    });

    // GetMulti Example
    this.GetMulti(['someKey', 'someOtherKey', 'ohLawd'], function(p_Error, p_Values, p_Metas)
    {
        console.log('Got Multi!');
        console.log(p_Error);
        console.log(p_Values);
        console.log(p_Metas);
        console.log('---');
    });

    // SetMulti Example
    this.SetMulti([
        { Key: 'someKey', Value: { some: 'value' } },
        { Key: 'someOtherKey', Value: { foo: 'bar', hello: 'world' } },
        { Key: 'ohLawd', Value: 'WOOOOOOOOOOOOOOPS', Expire: 10 }
    ], function(p_Error)
    {
        console.log('Set mutli!');
        console.log(p_Error);
        console.log('---');
    });
})
.on('error', function(p_Error)
{
    console.error('An error occured:');
    console.error(p_Error);
});
