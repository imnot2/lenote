UE.plugins['addimage'] = function(){
    var me = this;
    
    me.commands['addimage'] = {
        execCommand:function (cmd, name){
            window.external.addImage();
        }
    };
};