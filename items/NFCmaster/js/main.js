$(function(){
    var bower_height=document.body.scrollHeight ;
    var doc_geight=$(document.body).outerHeight(true);

});
$(function(){
    var tab=$("#g-bannerLast .g-lastBtn");
    var contentShow=$("#g-content .g-contentMain");
    tab.each(function(i){
        $(this).on("mouseover",function(){
            $(this).addClass("g-active");
            $(this).children().children(".g-imgActiveT").hide();
            $(this).children().children(".g-imgActive").show();
            tab.eq(i).siblings().children().children(".g-imgActiveT").show();
            tab.eq(i).siblings().children().children(".g-imgActive").hide();
            $(this).siblings().removeClass("g-active");
            contentShow.eq(i).show();
            contentShow.eq(i).siblings().hide();
        })
    })
});

$(function(){
    var signhead=$(".g-signIndexHead .g-signChoose");
    var signheadshow=$(".g-stepMain .signheadshow");
    signhead.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("g-signChooseActive");
            $(this).siblings().removeClass("g-signChooseActive");
            signheadshow.eq(i).show();
            signheadshow.eq(i).siblings().hide();
        })
    })
});
/*倒计时*/
$(function(){
    var signCodesBtn=$("#g-signCodesBtn");
    var c=60;
    var t;
    signCodesBtn.on("click",function(){
        timer();
    });
    function timer()
    {
        signCodesBtn.attr("disabled","true");
        signCodesBtn.val(c+"s");
        c--;
        t=setTimeout(timer,1000);
        if(c<0){
            clearTimeout(t);
            signCodesBtn.val("重试");
            signCodesBtn.removeAttr("disabled");
            c=60;
        }
    }
});
//阅读开发者协议后勾选同意可点击下一步
$(function(){
    var checked=$(".g-fristStep .g-stepCheckbox input");
    checked.on("click",function(){
       if(this.checked==true){
           $(".g-fristStep .g-stepThreeBtn").removeAttr("disabled");
           console.log("已经勾选了");
       }
        else{
           $(".g-fristStep .g-stepThreeBtn").attr("disabled","true");
           console.log("还没有");
       }
    });
});
$(function(){
    //登录验证
    $("#g-signIndexForm").validator({
        rules:{
            loginName: function(element) {
                return this.test(element, "mobile")===true ||
                    this.test(element, "email")===true ||
                    '请填写正确的电子邮箱或手机号！';
            }
        },
        fields:{
            loginName:{
                rule:"required;loginName",
                msg: {required: "请填写电子邮箱或手机号！"}
            },
            password:{
                rule:"required;password",
                msg: {required: "请填写密码！"},
                tip:"密码由6-20位数字、字母或下划线组成！"
            }
        }
    });

    //手机号码登录验证
    $("#numberSignForm").validator({
        rules:{
            phoneNumber:function(element){
                return this.test(element,"mobile")==true||
                "请填写正确的手机号码！"
            },
            numberCodes:[/^\d{6}$/,"请输入正确的6位验证码！"]
        },
        fields:{
            phoneNumber:{
                rule:"required;phoneNumber",
                msg: {required: "请填写手机号码！"}
            },
            numberCodes:{
                rule:"required;numberCodes",
                msg: {required: "请填写验证码！"}
            }
        }
    });

    //手机号码登录密码设置验证
    $("#setPasswordForm").validator({
        rules:{
            passrord:[/^(\w){6,20}$/,"请设置正确格式的密码！"]
        },
        fields:{
            passrord:{
                rule:"required;passrord",
                msg: {required: "请设置您的密码！"},
                tip:"密码由6-20位数字、字母或下划线组成！"
            }
        }
    });

    //重置密码手机号码验证
    $("#resectPasswordForm").validator({
        rules:{
            phoneNumber:function(element){
                return this.test(element,"mobile")==true||
                    "请填写正确的手机号码！"
            },
            numberCodes:[/^\d{6}$/,"请输入正确的6位验证码！"]
        },
        fields:{
            phoneNumber:{
                rule:"required;phoneNumber",
                msg: {required: "请填写手机号码！"}
            },
            numberCodes:{
                rule:"required;numberCodes",
                msg: {required: "请填写验证码！"}
            }
        }
    });
    //重置密码验证
    $("#resectPasswordSect").validator({
        rules:{
            passrord:[/^(\w){6,20}$/,"请设置正确格式的密码！"],
            passwordTwo:function(){
                return $("#resectPasswordSect input[name='password']").val()==$("#resectPasswordSect input[name='passwordTwo']").val()||
                    "两次密码输入不一致！"
            }
        },
        fields:{
            password:{
                rule:"required;passrord",
                msg: {required: "请设置您的密码！"},
                tip:"密码由6-20位数字、字母或下划线组成！"
            },
            passwordTwo:{
                rule:"required;passwordTwo",
                msg: {required: "请确认您的密码！"}
            }
        }
    });
});

