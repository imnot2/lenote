UE.plugins['addfile'] = function(){
    var me = this;
    
    me.commands['addfile'] = {
        execCommand:function (cmd, name){
            window.external.addFile();
        }
    };
};