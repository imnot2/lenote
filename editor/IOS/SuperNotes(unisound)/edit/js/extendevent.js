(function (le) {
    //扩展事件
    le.extendEvent = {
            fireEvent: function (fnName) {
                var fns = le.extendEvent.events[fnName] || [];
                for (var i = 0; i < fns.length; i++) {
                    var fn = fns[i];
                    fn.apply(this, arguments);
                }
            },
            addEvent: function (fnName, fn) {
                if (typeof le.extendEvent.events == 'undefined') le.extendEvent.events = {};
                var fnArr = le.extendEvent.events[fnName] || (fnArr = le.extendEvent.events[fnName] = []);
                fnArr.push(fn);
            }
        }
        // le.extendEvent = {}; 
        // le.extendEvent.events = {};

    // le.extendEvent.fireEvent = function(fnName){
    //  var fns = le.extendEvent.events[fnName] || [];
    //  for(var i=0; i<fns.length;i++){
    //      var fn = fns[i];
    //      fn.apply(this,arguments);
    //  }
    // }
    // le.extendEvent.addEvent = function(fnName,fn){
    //  var fnArr = le.extendEvent.events[fnName] || (fnArr = le.extendEvent.events[fnName] = []);
    //  fnArr.push(fn);
    // }
})(editor); 