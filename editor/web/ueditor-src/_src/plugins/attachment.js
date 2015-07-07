///import core
///commands 附件
///commandsName  attachment
///commandsTitle  附件
///commandsDialog  dialogs\attachment
/**
 * 附件
 * @function
 * @name baidu.editor.execCommands
 * @param {String} cmdName     cmdName="attachment"
 */
UE.plugins['attachment'] = function (){
    var me = this;
    me.commands['attachment'] = {
        execCommand:function (cmd, name){
        },
        queryCommandState: function(){
            var flag = false;
            try{
               var link = this.queryCommandValue('link');
               flag = link && link.getAttribute('resource');
            }catch(e){}
            return flag ? -1 : 0;
        }
    };
};