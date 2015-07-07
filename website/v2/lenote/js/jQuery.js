///<summary>
/// $.FormValidator.Version 查看版本。 大白 QQ:759922422 欢迎提供修改意见
/// 版本说明：主版本.次版本.修改次数。次版本为偶数表示稳定的产品版本，没有添加新功能，为奇数表示测试版本，有添加新功能。
/// 请保留本块注解
///</summary>
(function($) {
    var reInt = /^\s*[+-]?\d+\s*$/;
    var reUInt = /^\s*[+]?\d+\s*$/;
    //用于保存在jquery对象data的key，其保存的值为验证配置对象。
    var keyFormValidateSettings = "FormValidateSettings";
    //用于dom对象的属性CauseFormValidate,值为true;
    var keyCauseFormValidate = "CauseFormValidate";
    var DataType = {
        Int16: {
            Name: "Int16",
            MaxValue: 32767,
            MinValue: -32768,
            CheckRange: function(val) {
                return ((isFinite(val)) && (reInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        Int32: {
            Name: "Int32",
            MaxValue: 2147483647,
            MinValue: -2147483648,
            CheckRange: function(val) {
                return ((isFinite(val)) && (reInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        Int64: {
            Name: "Int64",
            MaxValue: 9223372036854775807,
            MinValue: -9223372036854775808,
            CheckRange: function(val) {
                return ((isFinite(val)) && (reInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        UInt16: {
            Name: "UInt16",
            MaxValue: 65535,
            MinValue: 0,
            CheckRange: function(val) {
                return ((isFinite(val)) && (reUInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        UInt32: {
            Name: "UInt32",
            MaxValue: 4294967295,
            MinValue: 0,
            CheckRange: function(val) {
                return ((isFinite(val)) && (reUInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        UInt64: {
            Name: "UInt64",
            MaxValue: 18446744073709551615,
            MinValue: 0,
            CheckRange: function(val) {
                return ((isFinite(val)) && (reUInt.test(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        Float: {
            Name: "Float",
            MaxValue: 3.402823E+38,
            MinValue: -3.402823E+38,
            CheckRange: function(val) {
                return ((isFinite(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        Double: {
            Name: "Double",
            MaxValue: 1.79E+308,
            MinValue: -1.79E+308,
            CheckRange: function(val) {
                return ((isFinite(val)) && (this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        DateTime: {
            Name: "DateTime",
            MaxValue: new Date(9999, 12, 31, 23, 59, 59),
            MinValue: new Date(1, 1, 1, 0, 0, 0),
            CheckRange: function(val) {
                return ((!isNaN(Date.parse(val)))(this.MaxValue >= val) && (this.MinValue <= val));
            }
        },
        String: {
            Name: "String",
            IsNullOrEmpty: function(val) {
                return ((val == null) || (val == ""));
            }
        }
    };
    function GetLength(obj) {
        var length = 0;
        switch (obj.type) {
            case "checkbox":
                length = $(":" + obj.type + "[name='" + obj.name + "']:checked").length;
                break;
            case "select-multiple":
                length = $(obj).find("option:selected").length;
                break;
            default:
                length = obj.value.length;
                break;
        }
        return length;
    };
    $.extend({
        FormValidator: {
            Version: "0.1.9",
            FormValidate: {
                MaxLength: function(target, maxLength) {
                    if (!(isFinite(maxLength) && reUInt.test(maxLength) && (maxLength > 0))) {
                        throw "maxLength必须为正整数，且大于0";
                    }
                    return (GetLength(target[0]) <= maxLength);
                },
                MinLength: function(target, minLength) {
                    if (!(isFinite(minLength) && reUInt.test(minLength) && (minLength > 0))) {
                        throw "minLength必须为正整数，且大于0";
                    }
                    return (GetLength(target[0]) >= minLength);
                },
                MaxValue: function(target, maxValue) {
                    if (maxValue == null) {
                        throw "maxValue不能为null";
                    }
                    return (target.val() <= maxValue);
                },
                MinValue: function(target, minValue) {
                    if (minValue == null) {
                        throw "minValue不能为null";
                    }
                    return (target.val() >= minValue);
                },
                Format: function(target, format) {
                    if (format == null) {
                        throw "format不能为null";
                    }
                    if (format.constructor.prototype == "//") {
                        return format.test(target.val());
                    }
                    else {
                        return (new RegExp(format)).test(target.val());
                    }
                },
                Type: function(target, type) {
                    if (type == DataType.String.Name) {
                        return true;
                    }
                    else if (DataType.hasOwnProperty(type)) {
                        return DataType[type].CheckRange(target.val());
                    }
                    else {
                        throw "type未定义";
                    }
                },
                Empty: function(target, bEmpty) {
                    if (bEmpty) {
                        var val = target.val();
                        return ((val != null) && (val != ""));
                    }
                    else {
                        return true;
                    }
                },
                EqualTo: function(target, id) {
                    return (target.val() == $("#" + id).val());
                },
                Custom: function(target, func) {
                    return func(target);
                }
                //下一个版本更新：function(target, sender)，其中，target表示指向当前调用对象，sender = Value值
            },
            //表单验证设置
            DefaultFormValidateConfigSettings: {
                Config: {
                    CauseErrorNext: true,  //表示，当出现错误时，是否继续完成余下表单控件验证
                    CauseFirstErrorFocus: true,
                    AutoSubmit: true
                },
                Message: {
                    Text: {
                      /*  Error: "表单中存在错误！"  //验证失败后，提示信息*/
                    },
                    MessageSpaceHolderID: null
                }
            },
            //表单下控件默认验证设置
            DefaultFormValidateSettings: {
                FormValidate: {
                    /*
                    MaxLength: {
                    Value: 50, //最大长度定义
                    Message: "不符合最大长度定义"
                    },
                    MinLength: {
                    Value: 1, //最小长度定义
                    Message: "不符合最小长度定义"
                    },
                    MaxValue: {
                    Value: null, //最大值定义，一般用来比较数字
                    Message: "不符合最大值定义"
                    },
                    MinValue: {
                    Value: null, //最小值定义，一般用来比较数字
                    Message: "不符合最小值定义"
                    },
                    Format: {
                    Value: null, //格式化定义，正则表达式字符串
                    Message: "格式错误"
                    },
                    Type: {
                    Value: null, //数据类型，为DataType成员的Name属性值
                    Message: "类型错误"
                    },
                    Ajax {  //Ajax验证，这个功能未考虑。以后可能增加此功能
                    Value:{
                    Url : null,
                    Method : post                        
                    }
                    },
                    Custom: {
                    Value: function() { return false; }, //自定义验证处理函数，返回true或false
                    Message: "顶定义错误"
                    },
                    */
                    Empty: {
                        Value: true //true表示验证是否为空，false表示不验证空值
                    }
                },
                Config: {
                    AutoTrim: true, //在验证之前，是否自动删除首尾空格
                    CauseBlur: true, //是否触发失去焦点时验证
                    CauseFocus: true //是否触发获得焦点时提示
                },
                Message: {
                    Text: {
                        Show: null, //在显示的情况下，页面控件提示信息
                        Success: null, //验证成功后，提示信息
                        Error: "错误！",  //验证失败后，提示信息。此信息为默认提示信息。如果验证错误信息没有设置时，将显示此信息。
                        Focus: null  //获得焦点时，提示信息
                    },
                    CssClass: {
                        Show: "Show",   //在页面显示的情况下
                        Success: "Success", //验证成功时的cssClass
                        Error: "Error",  //验证失败时
                        Focus: "Focus" //获得焦点时
                    },
                    MessageSpaceHolderID: null //显示提示信息的ID,如果没有设置或设置未空，将按Alert模式提示。
                }
            }
        }
    });
    //合并对象，从defaultObj中的不存在在obj中的属性复制到obj对象中去。
    function joinObject(obj, defaultObj) {
        if (obj == defaultObj) {
            throw "不能对同一个对象进行属性复制";
        }
        for (var p in defaultObj) {
            if (!obj.hasOwnProperty(p)) {
                if ((typeof (defaultObj[p]) == "object") && (defaultObj[p] != null)) {
                    obj[p] = {};
                    joinObject(obj[p], defaultObj[p]);
                }
                else {
                    obj[p] = defaultObj[p];
                }
            }
            else if ((obj[p] != null) && (typeof (obj[p]) == "object")) {
                joinObject(obj[p], defaultObj[p]);
            }
        }
    };
    function bindDefaultFormValidateSettings(settings) {
        joinObject(settings, $.FormValidator.DefaultFormValidateSettings);
    };
    function bindDefaultFormValidateConfigSettings(settings) {
        joinObject(settings, $.FormValidator.DefaultFormValidateConfigSettings);
    };
    function showMessage(messageSpaceHolderID, message, cssClass) {
        if (message != null) {
            if (DataType.String.IsNullOrEmpty(messageSpaceHolderID)) {
                alert(message);
            }
            else {
                var spaceHolder = $("#" + messageSpaceHolderID);
                spaceHolder.html(message);
                if (!DataType.String.IsNullOrEmpty(cssClass)) {
                    spaceHolder.removeClass();
                    spaceHolder.addClass(cssClass);
                }
            }
        }
    };
    $.fn.extend({
        GetValidateSettings: function(group) {
            if (group == null) {
                group = "";
            }
            return $(this).data(keyFormValidateSettings + group);
        },
        SetValidateSettings: function(settings, group) {
            if (group == null) {
                group = "";
            }
            if ($(this).is("form")) {
                if (settings == null) {
                    settings = {};
                }
                bindDefaultFormValidateConfigSettings(settings);
                if (settings.Config.AutoSubmit) {
                    $(this).submit(function() {
                        return $(this).FormValidate(group);
                    });
                }
            }
            else {
                bindDefaultFormValidateSettings(settings);
                if (settings.Config.CauseFocus) {
                    $(this).focus(function() {
                        showMessage(settings.Message.MessageSpaceHolderID, settings.Message.Text.Focus, settings.Message.CssClass.Focus);
                    });
                }
                var type = $(this)[0].type;
                if (settings.Config.CauseBlur) {
                    $(this).blur(function() {
                        return $(this).FormValidate(group);
                    });
                }
                //如果有设置提示信息控件ID，则显示提示信息
                if (settings.Message.MessageSpaceHolderID != null) {
                    showMessage(settings.Message.MessageSpaceHolderID, settings.Message.Text.Show, settings.Message.CssClass.Show);
                }
            }
            $(this).attr(keyCauseFormValidate + group, true);
            $(this).data(keyFormValidateSettings + group, settings);
        },
        RemoveValidateSettings: function(group) {
            if (group == null) {
                group = "";
            }
            $(this).removeAttr(keyCauseFormValidate + group);
            $(this).removeData(keyFormValidateSettings + group);
        },
        FormValidate: function(group) {
            var retval = true;
            if (group == null) {
                group = "";
            }
            var settings = $(this).GetValidateSettings(group);
            if ($(this).is("form")) {
                var firstErrorObj = null; //用来保存第一个出现错误的对象。
                var lst = $(this).find("[" + keyCauseFormValidate + group + "=true]");
                $.each(lst, function() {
                    retval = $(this).FormValidate(group) && retval; //注意，如果写成:retval = retval && $(this).FormValidate(),当发生错误时，不再继续调用下接的控件判断了。因为retval=false时，retval && $(this).FormValidate()语句中，$(this).FormValidate()不再运行。
                    if ((firstErrorObj == null) && (!retval)) {
                        firstErrorObj = $(this);
                    }
                    if ((!retval) && (settings != null)) {
                        return settings.Config.CauseErrorNext;
                    }
                    return true;
                });
                if ((!retval) && (settings != null)) {
                    if (settings.Config.CaseFirstErrorFocus == true) {
                        firstErrorObj[0].focus();
                    }
                    var message = settings.Message.Text.Error;
                    showMessage(settings.Message.MessageSpaceHolderID, message);
                }
            }
            else {
                if (settings == null) {
                    throw "该对象验证配置未空";
                }
                if (!settings.hasOwnProperty("FormValidate")) {
                    throw "FormValidate未配置";
                }
                var message = null;
                var cssClass = null;
                var target = $(this);
                if (settings.Config.AutoTrim) {
                    if (target[0].type == "text") {
                        target.val($.trim(target.val()));
                    }
                }
                if ((!settings.FormValidate.Empty.Value) && (DataType.String.IsNullOrEmpty(target.val()))) {
                    retval = true;
                    cssClass = settings.Message.CssClass.Show;
                }
                else {
                    for (var v in settings.FormValidate) {
                        retval = $.FormValidator.FormValidate[v](target, settings.FormValidate[v].Value);
                        if (!retval) {
                            if (settings.FormValidate[v].Message != null) {
                                message = settings.FormValidate[v].Message;
                            }
                            else {
                                message = settings.Message.Text.Error;
                            }
                            cssClass = settings.Message.CssClass.Error;
                            break;
                        }
                    }
                    if (retval) {
                        message = settings.Message.Text.Success;
                        cssClass = settings.Message.CssClass.Success;
                    }
                    showMessage(settings.Message.MessageSpaceHolderID, message, cssClass);
                }
            }
            return retval;
        }
    });
})(jQuery);