node-couchbase
==============================================================

A **Couchbase** client for node.js in pure JavaScript.

Current Version: **0.1.4-alpha**

Basic Installation
----------------------------

You can install this package either by using npm or by downloading the source from GitHub and requiring it directly.

To install using npm open your terminal (or command line), make sure you're in your application directory and execute the following command:

    npm install node-couchbase
    
You can then start using the package by requiring it from your application as such:

    var CouchbaseClient = require('node-couchbase');
    
Client
------------------

Currently only a handful of functions are implemented that allow you to perform only the most basic operations.
The client is currently vBucket aware but does not yet fully support vBucket mapping while rebalancing operations.

For basic examples of all of the currently implemented calls make sure to check the [example script](https://github.com/OrfeasZ/node-couchbase/tree/master/example.js).

Notes
----

* The client currently only supports couchbase buckets (not memcached).
* There is no support for views yet.
* When setting the value of a document you can provide an object, a string or a number.
* This is still an alpha version and bugs are expected to occur. Feel free to fork it and submit bug reports.
* Performance wise it currently performs ~11.5 times faster than [couchnode](https://github.com/couchbase/couchnode) (benchmarked against version 0.0.12).
