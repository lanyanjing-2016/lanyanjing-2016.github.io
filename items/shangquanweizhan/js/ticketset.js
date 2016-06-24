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

  