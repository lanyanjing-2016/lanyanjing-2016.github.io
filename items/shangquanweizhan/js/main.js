/*贺js*/
/*点中每行任意td部位，都可选中或取消*/
!(function() {
	$(document).ready(function(e) {
		$(".table-list-show tr").slice(1).each(function(){  
			var tablex = this;  
			$(this).children().slice(1).click(function(){  
				$($(tablex).children()[0]).children().each(function(){  
					if(this.type=="checkbox"){  
						if(!this.checked){  
							this.checked = true;  
						}else{  
							this.checked = false;  
						}  
					}  
				});  
			});  
		});
    }); 
})();
/*全选/取消全选*/
!(function() {
	$(document).on("click", "#allCheck", function() {
		if (this.checked == true) {
			$(".checkbox").each(function() {
				this.checked = true;
			});
		} else {
			$(".checkbox").each(function() {
				this.checked = false;
			});
		}
	})
})();

/*默认选种类型*/
/*会员卡设置*/
!(function() {
	/*积分基本设置*/
	$(document).on("input", "#cardName", function() {
		$("#cardname").text($("#cardName").val());
	});
	$(document).on("click", "#nextBtn", function() {
		$("#starttime").text($("#startTime").val());
		$("#finishtime").text($("#finishTime").val());
		$("#common").css("display", "none");
		$(".iphoneLeftHead").css("background-position-y", "-55px");
		$("#integral").css("display", "block");
	});
	/*积分特权设置*/
	$(document).on("input", "#giveIntegral", function() {
		$("#giveintegral").text($("#giveIntegral").val());
	});
	$(document).on("input", "#changeIntegral", function() {
		$("#changeintegral").text($("#changeIntegral").val());
	});
	$(document).on("click", "#nextBtnTwo", function() {
		$("#integral").css("display", "none");
		$(".iphoneLeftHead").css("background-position-y", "-110px");
		$("#other").css("display", "block");
	});
	/*其他信息设置*/
	$(document).on("click", "#nextBtnThree", function() {
		$("#other").css("display", "none");
		$(".iphoneLeftHead").css("background-position-y", "-165px");
		$("#save").css("display", "block");
	});
})();
/*积分会员卡编辑*/
!(function() {
	/*积分基本设置*/
	$(document).on("input", "#cardName", function() {
		$("#cardname").text($("#cardName").val());
	});
	$(document).on("click", "#modifyNextBtn", function() {
		$("#common").css("display", "none");
		$(".iphoneLeftHead").css("background-position-y", "-55px");
		$("#mix").css("display", "block");
	});
	$(document).on("click", "#modifyNextBtnTwo", function() {
		$("#mix").css("display", "none");
		$(".iphoneLeftHead").css("background-position-y", "-110px");
		$("#other").css("display", "block");
	});
	/*其他信息设置*/
	$(document).on("click", "#nextBtnThree", function() {
		$("#other").css("display", "none");
		$(".iphoneLeftHead").css("background-position-y", "-165px");
		$("#save").css("display", "block");
	});
})();
/*默认选种类型*/
!(function() {
	/*积分型选中*/
	$(document).on("click", "#integralChecked", function() {
			$("#hhblock").css("display", "none");
			$("#hunh").css("display", "none");
			$("#djblock").css("display", "none");
			$("#zhekou").css("display", "none");
			$("#jfblock").css("display", "block");
			$("#moren").css("display", "block");
			$(document).on("click", "#nextBtn", function() {
				$("#discount").css("display", "none");
				$("#mix").css("display", "none");
				$("#integral").css("display", "block");
				$(document).on("click", "#jfNextBtn", function() {
					$(".iphoneLeftHead").css("background-position-y", "-110px");
					$("#other").css("display", "block");
					$("#integral").css("display", "none");
				})
			})
		})
		/*积分型选中*/
		/*折扣型选中*/
	$(document).on("click", "#discountChecked", function() {
			$("#moren").css("display", "none");
			$("#jfblock").css("display", "none");
			$("#hhblock").css("display", "none");
			$("#hunh").css("display", "none");
			$("#djblock").css("display", "block");
			$("#zhekou").css("display", "block");
			$(document).on("click", "#nextBtn", function() {
				$("#integral").css("display", "none");
				$("#mix").css("display", "none");
				$("#discount").css("display", "block");
				$(document).on("click", "#zkNextBtn", function() {
					$(".iphoneLeftHead").css("background-position-y", "-110px");
					$("#other").css("display", "block");
					$("#discount").css("display", "none");
				})
			})
		})
		/*折扣型选中*/
		/*混合型选中*/
	$(document).on("click", "#mixChecked", function() {
			$("#moren").css("display", "none");
			$("#jfblock").css("display", "none");
			$("#djblock").css("display", "none");
			$("#zhekou").css("display", "none");
			$("#hhblock").css("display", "block");
			$("#hunh").css("display", "block");
			$(document).on("click", "#nextBtn", function() {
				$("#discount").css("display", "none");
				$("#integral").css("display", "none");
				$("#mix").css("display", "block");
				$(document).on("click", "#mixNextBtn", function() {
					$(".iphoneLeftHead").css("background-position-y", "-110px");
					$("#other").css("display", "block");
					$("#mix").css("display", "none");
				})
			})
		})
		/*混合型选中*/
		/*等级折扣显示/隐藏*/
	$(document).on("click","#countLevelChecked",function(){
		$(".countLevel").toggle();
	})
	$(document).on("click","#integralBoonChecked",function(){
		$(".integralBoon").toggle();
	});
})();
/*左侧导航点击后选中状态*/
!(function(){
	$(function(){
        function navClick(){
            var urlstr = location.href;
            var urlstatus = false;
            $(".left a").each(function() {
                if((urlstr + '/').indexOf($(this).attr('href')) > -1 && $(this).attr('href')!="") {
                    $(this).addClass('active1');
                    urlstatus = true;
                }
                else {
                    $(this).removeClass('active1');
                }
            });
            if (!urlstatus) {
                $(".left a").eq(0).addClass('active1');
            }
        };
        navClick();
	})
})();
/**
 * @author yue xin ming
 * @deprecated 优惠券设置js
 * @date 2016-03-10
*/
var couponset = {
	/** 数字输入 */
	changeNum : function(obj) {
		if (null != $(obj).val() && $(obj).val() != "") {
			var patt = /^[0-9]+$/;
			if (!patt.exec($.trim($(obj).val()))) {
				$(obj).val($(obj).val().replace(/[^0-9]/, ""));
			}
		}
	},
	/**优惠券类型选择 */
	CouponTypeSelect : function() {
		var i = $("#CouponTypeSelect").val(); 
		if (null != i && i != "") {
			for(var j=1;j<=3;j++){
				$("#CoutypeLi" + j).hide();
				$("#CoutypeDesc" + j).hide();
			};			
			$("#CoutypeDesc" + i).show();
			$("#CoutypeLi" + i).show();
			$("#Coutypeval" + i).val(""); 
		}
	},
	/**优惠券总量选择 */
	CouponTotalnumSelect : function() {
		var i = $("#TotalnumSelect").val();
		if (i == 0) {
			$("#TotalnumVal").hide();
			$("#totalnum").val("");
		} else {
			$("#TotalnumVal").show();
		}
	},
	/**优惠券最低消费选择 */
	CouponMincostSelect : function() {
		var i = $("#MincostSelect").val();
		if (i == 0) {
			$("#MincostVal").hide();
			$("#mincost").val(""); 
		} else {
			$("#MincostVal").show();
		}
	},
	/**选择门店终端 */
	CouponIslimitshopSelect : function() {
		var i = $("#IslimitshopSelect").val();
		if (i == 0) {
			$("#IslimitshopLi").hide();
		} else {
			$("#IslimitshopLi").show();
		}
	}, 
	/** 用户领取限制选择 */
		CouponLimitgetSelect : function() {
			var i = $("#LimitgetSelect").val();
			if (i == 0) {
				$("#ExpireGetVal").hide();
				$("#DayGetVal").hide();
			} else if (i == 1) {
				$("#ExpireGetVal").show();
				$("#DayGetVal").hide();
			} else if (i == 2) {
				$("#ExpireGetVal").hide();
				$("#DayGetVal").show();
			}
		},	
	/** 使用时间限制选择 */
	CouponLimittimeSelect : function() {
		var i = $("#LimittimeSelect").val();
		if (i == 0) {
			$("#DayTimeVal").hide();
			$("#WeekTimeVal").hide();
		} else if (i == 1) {
			$("#DayTimeVal").show();
			$("#WeekTimeVal").hide();
		} else if (i == 2) {
			$("#DayTimeVal").hide();
			$("#WeekTimeVal").show();
		}
		$("#WeekTimeVal").find("a").each(function() {
					$(this).removeClass("on");
				});
		$("#WeekTimeSelect1").hide();
		$("#WeekTimeSelect2").hide();
		$("#WeekTimeSelect3").hide();
		$("#WeekTimeSelect4").hide();
		$("#WeekTimeSelect5").hide();
		$("#WeekTimeSelect6").hide();
		$("#WeekTimeSelect7").hide();
	},	 
	/** 使用时间限制每周选择 */
	CouponWeekTimeSelect : function(obj) {
		var i = $(obj).attr("value");
		if ($(obj).attr("class") == "on") {
			$(obj).removeClass("on");
			$("#WeekTimeSelect" + i).hide();
		} else {
			$(obj).addClass("on");
			$("#WeekTimeSelect" + i).show();
		}
	},
	/** 用户使用限制选择 */
	CouponLimituserSelect : function() { 
		var i = $("#LimituserSelect").val();
		if (i == 0) {
			$("#ExpireUserVal").hide();
			$("#DayUserVal").hide(); 
		} else if (i == 1) {
			$("#ExpireUserVal").show();
			$("#DayUserVal").hide();
		} else if (i == 2) {
			$("#ExpireUserVal").hide();
			$("#DayUserVal").show();
		}
	},
	/** 改变优惠券名称 右边实时显示*/
	changeCouname : function(obj) {
		var val = $(obj).val();
		if (null != val && val != "") {
			$("#CounameYes").html(val);
		}
	},
	/*左侧使用说明 实时显示*/
	setyl :function(obj,type){
		if(type==1){//最低消费
			if($(obj).val() != '' && $(obj).val() != 0){
				$("#ylexplian1").html("最低消费"+$(obj).val()+"元");
			}else{
				$("#ylexplian1").html("最低消费无限制");
			}
		} 
		if(type==2){//使用时间限制
			var choseval = $("#LimittimeSelect").val();
			if(choseval == 0){
				$("#ylexplian2").html("使用时间无限制");
			}else if(choseval == 1){//有效期内
				$("#ylexplian2").html("每天"+$("#couponUser_begintime").val()+"-"+$("#couponUser_endtime").val()+"可使用");
			}else if(choseval == 2){//每天
				var wkday = "";
				var wktime = "";
				$("#WeekTimeVal").find("a").each(function() {
					if ($(this).hasClass("on")) {
						var i = $(this).attr("value");
						var b = $("#WeekTimeSelect" + i).find("select:eq(0)").val();
						var e = $("#WeekTimeSelect" + i).find("select:eq(1)").val();
						if (null != b && b != "" && null != e && e != "") {
							wktime = b + "-" + e ;
						}
						wkday += $(this).html() + "("+wktime+"),";
					}
				});
				if (null != wkday && wkday != "") {
					wkday = wkday.substring(0, wkday.length - 1);
				}
				$("#ylexplian2").html("每"+wkday+"可使用");
			}
		} 
		if(type==3){//使用数量限制
			var seleva = $("#LimituserSelect").val();
			if(seleva==0){//无限制
				$("#ylexplian3").html("使用数量无限制");
			}else if(seleva==1){//有效期内
				if($(obj).val() != ''){
					$("#ylexplian3").html("有效期内可使用"+$("#couponUser_expirednums").val()+"次");
				}
			}else if(seleva==2){//每天
				if($(obj).val() != ''){
					$("#ylexplian3").html("每天可使用"+$("#couponUser_daynums").val()+"次");
				}
			}
		} 
		if(type==4){//是否与其他优惠券共享   
			var seleva = $("#LimituserSelect").val();
			if($(obj).val()==0){//否
				$("#ylexplian4").html("不可与其他优惠券共用");
			}else if($(obj).val()==1){//是
				$("#ylexplian4").html("可与其他优惠券共用");
			}
		} 
		if(type==5){//说明
			$(".ylexplian5").remove();
			var p = $.trim($(obj).val());
			if(p != ''){
				var s = p.split("\n");
				if(s.length>0){
					for(var i=0;i<s.length;i++){
						if(s[i] != ""){
							$(".user_vote>ul").append("<li class='ylexplian5'>"+s[i]+"</li>");
						}
					}
				}else{
					s = p.split("\r\n");
					for(var i=0;i<s.length;i++){
						if(s[i] != ""){
							$(".user_vote>ul").append("<li class='ylexplian5'>"+s[i]+"</li>");
						}
					}
				}
			}
		}
	},
	/** 提交表单 */
	onsubmit : function() {
		if($("#couname").val()==""){
			$("#errors_div").show();
			$("#errors_msg").html("券名称不能为空");
		} else {
			$("#errors_div").hide();
			$("#errors_msg").html("");
		} 
	},
	/**优惠券推广*/
	populcoupon:function(){
			$(".populcoupon").hide();
			$(".populcouponsecond").show();
	},
	/*二维码预览*/
	alertbarcode:function(){
		var a=$(".small_barcode img").attr("src");
		$(".barcode img").attr("src",a); 
	},
	/*整点时间  结束时间不能大于开始时间的判断*/
	SelectDayTimeVal:function(obj){
		var begin=$(obj).val();
		for(var j=1;j<=24;j++){
			$(".couponUser_endtime option[value='"+j+"']").attr("disabled",false);
			$(".couponUser_begintime option[value='"+j+"']").attr("disabled",false);
		}
		console.log(begin);
		for(var i=1;i<begin;i++){
		  	$(".couponUser_endtime option[value='"+i+"']").attr("disabled","disabled");
		} 
	},	 
	SelectDayEndTimeVal:function(obj){
		var begin=$(obj).val();
		for(var j=1;j<=24;j++){
			$(".couponUser_begintime option[value='"+j+"']").attr("disabled",false);
			$(".couponUser_endtime option[value='"+j+"']").attr("disabled",false);
		}
		var i=parseInt(begin)+1;
		for(i;i<=24;i++){
		 $(".couponUser_begintime option[value='"+i+"']").attr("disabled","disabled");
		}
	}
	
}