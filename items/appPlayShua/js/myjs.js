;
(function(win, doc, undefind) {
	$(function() {
		//首页展开，隐藏
		$(".security .p_title").each(function(i) {
			$(this).click(function() {
				var noticeinfo = $(".security .p_title").eq(i).parent().find(".secur_noticeinfo");
				if (noticeinfo.css("display") == "none") {
					noticeinfo.show();
					$(".security .p_title").eq(i).find(".sp_ico").css("background-image", "url(images/up_ico.png)");
				} else {
					noticeinfo.hide();
					$(".security .p_title").eq(i).find(".sp_ico").css("background-image", "url(images/down_ico.png)");
				}
			})
		});
		//选择套餐
		$(".div_option").on("click", function() {
			if ($(".selected ul").css("display") == "none") {
				$(".selected ul").show();
			} else {
				$(".selected ul").hide();
			}
			event.stopPropagation();
		});
		$(document).on("click", function() {
			$(".selected ul").hide();
		}); 
		//hover效果
		$(".selected ul li").attr('ontouchstart', 'hover(this)');
		//秒除hover
		$(".selected ul li").attr('ontouchend', 'mouseout(this)'); 
		
		//套餐改变时 li点击事件
		$(".selected ul li").on("click", function() {
			var livalue = $(this).html();
			$(".div_option").html("").append(livalue);
			var liprice = $(this).find("span").eq(1).text().match(/\d+/g);
			//底部产品功能费响应的改变
			$(".foot .p_left span").text(liprice);
			$(".selected ul").hide();
		});
		//立即购买，判断有没有阅读保障声明
		$("#go_buy").on("click",function(){
			if($("#checkboxFourInput").prop("checked")){
				$(this).attr("href","phone_verify.html");
			}else{
				$(".error_tips .p_info").html("");
				errtips(".error_tips");
				$(".error_tips .p_info").html("请先阅读产品须知!");
			}
		})
		//保险条款弹出层
		$(".sp_clause").click(function() {
			var height=$(document).scrollTop() + ($(window).height() - $(".bx_clause").height()) / 2;
			var width = $(document).scrollLeft() + ($(window).width() - $(".bx_clause").width()) / 2;
			$(".bx_clause").css({
				"top": "20%",
				"left": width
			}).show();
			$(".mask_box").show();
		});
		//遮罩层点击关闭弹窗
		$(".mask_box,.error_tips .p_btn").click(function() {
			$(".mask_box").hide();
			$(".bx_clause").css("display", "none");
			$(".error_tips").hide();
		});
		//错误信息提示框
		function errtips(err_tips) {
			var width=$(document).scrollLeft() + ($(window).width() - $(err_tips).width()) / 2;
			$(err_tips).css({
				"top": "33%",
				"left": width
			}).show(); 
			$(".mask_box").show();
		} 
		/*获取验证码*/
		$("#sms_send").on("click", function() {
			$(".error_tips .p_info").html("");
			var patt = /^1[0-9]{10}$/;
			if ($("#mobile").val() == "") {
				errtips(".error_tips");
				$(".error_tips .p_info").html("手机号码不能为空!");
			} else if (!patt.exec($.trim($("#mobile").val()))) {
				errtips(".error_tips");
				$(".error_tips .p_info").html("请输入正确的手机号码!");
			} else {
				$("#sms_send").hide();
				$("#sms_show").show();
				remaintime(60);
			}
		});
		//确认购买
		$(".purch_btn").on("click", function() {
			$(".error_tips .p_info").html("");
			var patt = /^1[0-9]{10}$/;
			if ($("#mobile").val() == "") {
				errtips(".error_tips");
				$(".error_tips .p_info").html("手机号码不能为空!");
			} else if (!patt.exec($.trim($("#mobile").val()))) {
				errtips(".error_tips");
				$(".error_tips .p_info").html("请输入正确的手机号码!");
			} else if ($("#smscode").val() == "") {
				errtips(".error_tips");
				$(".error_tips .p_info").html("验证码不能为空!");
			} else {
				$(".purch_btn").attr("href", "pay_order.html");
			}
		});
		//登录并查询
		$(".login_btn").on("click", function() {
			$(".error_tips .p_info").html("");
			var patt = /^1[0-9]{10}$/;
			if ($("#mobile").val() == "") {
				errtips(".error_tips");
				$(".error_tips .p_info").html("手机号码不能为空!");
			} else if (!patt.exec($.trim($("#mobile").val()))) {
				errtips(".error_tips");
				$(".error_tips .p_info").html("请输入正确的手机号码!");
			} else if ($("#smscode").val() == "") {
				errtips(".error_tips");
				$(".error_tips .p_info").html("验证码不能为空!");
			}else if ($("#ordernumber").val() == "") {
				errtips(".error_tips");
				$(".error_tips .p_info").html("订单号不能为空!");
			} else {
				$(".login_btn").attr("href", "order_info.html");
			}
		});
		 
		//完善信息页面//
		$(".cardID_btn").on("click", function() {
			$(".error_tips .p_info").html("");
			if ($("#cardIdname").val() == "") {
				errtips(".error_tips");
				$(".error_tips .p_info").html("姓名不能为空!");
			} else if ($("#cardIdnumber").val() == "") {
				errtips(".error_tips");
				$(".error_tips .p_info").html("身份证不能为空!");
			} else if (isIdCardNo($("#cardIdnumber").val())) {
				if (isAge($("#cardIdnumber").val())) {
					$(".cardID_btn").attr("href", "security_info.html");
				}
			} else {
				errtips(".error_tips");
				$(".error_tips .p_info").html("请输入正确的身份证号!");
			}
		});
		//验证年龄大于18小于60
		function isAge(num) {
			var biryear = num.substring(6, 10);
			var birmonth = num.substring(10, 12);
			var birday = num.substring(12, 14);
			var birthtime = new Date();
			birthtime.setFullYear(biryear, birmonth, birday);
			var now = new Date();
			var spanSecond = now.getTime() - birthtime.getTime();
			var spanTime = new Date(spanSecond);
			var spanYear = spanTime.getYear() - 70;
			var spanMonth = spanTime.getMonth();
			var spanDay = spanTime.getDay();
			if (spanYear >= 18 && spanYear < 60) {
				return true;
			} else {
				errtips(".error_tips");
				$(".error_tips .p_info").html("本产品适合18到60岁的人购买!");
				return false;
			}
		}
		//验证身份证号码
		function isIdCardNo(num) {
			num = num.toUpperCase();
			//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。  
			if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
				return false;
			}
			//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
			//下面分别分析出生日期和校验位
			var len, re;
			len = num.length;
			if (len == 15) {
				re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
				var arrSplit = num.match(re);
				//检查生日日期是否正确
				var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
				var bGoodDay;
				bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
				if (!bGoodDay) {
					return false;
				} else {
					//将15位身份证转成18位
					//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
					var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
					var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
					var nTemp = 0,
						i;
					num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
					for (i = 0; i < 17; i++) {
						nTemp += num.substr(i, 1) * arrInt[i];
					}
					num += arrCh[nTemp % 11];
					return num;
				}
			}
			if (len == 18) {
				re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
				var arrSplit = num.match(re);
				//检查生日日期是否正确
				var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
				var bGoodDay;
				bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
				if (!bGoodDay) {
					return false;
				} else {
					//检验18位身份证的校验码是否正确。
					//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
					var valnum;
					var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
					var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
					var nTemp = 0,
						i;
					for (i = 0; i < 17; i++) {
						nTemp += num.substr(i, 1) * arrInt[i];
					}
					valnum = arrCh[nTemp % 11];
					if (valnum != num.substr(17, 1)) {
						return false;
					}
					return num;
				}
			}
			return false;
		}
	});
})(window, document)
/*获取验证码倒计时*/
function remaintime(second) {
	if (second == 1) {
		clearTimeout(setTimeout("remaintime(" + second + ")", 1000));
		$("#sms_show").hide();
		$("#sms_send").show();
	} else {
		second = second - 1;
		$("#sms_time").html(second);
		setTimeout("remaintime(" + second + ")", 1000);
	}
};
//移动端实现hover效果
function mouseout(obj) {
	var className = "hover";
	var _ecname = obj.className;
	if (_ecname.length == 0) return;
	if (_ecname == className) {
		obj.className = "";
		return;
	}
	if (_ecname.match(new RegExp("(^|\s)" + className + "(\s|$)")))
		obj.className = _ecname.replace((new RegExp("(^|\s)" + className + "(\s|$)")), "");
}
//移动端移出hover效果
function hover(obj) {
	if (!obj) return;
	var className = "hover"
	var _ecname = obj.className;
	if (_ecname.length == 0) {
		obj.className = className;
		return;
	}
	if (_ecname == className || _ecname.match(new RegExp("(^|\s)" + className + "(\s|$)")))
		return;
	obj.className = _ecname + "" + className;
}