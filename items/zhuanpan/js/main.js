$(function() { 
		//转盘事件
		var $rotaryArrow = $('#rotaryArrow');
		var $result = $('#result');
		var $resultTxt = $('#resultTxt');
		//奖项概率函数rate_1,rate_2,rate_3分别表示一二三等奖的概率
		function raffle(rate_1, rate_2, rate_3) {
		    var start = rate_1 + rate_2 + rate_3;
		    if (start > 1) throw new Error("中奖率之和不能大于1");
		    var span = (1 - start) / 3;
		    var rand = Math.random();
		    if (rand <= rate_1)
		        return 1; //代表一等奖
		    else if (rate_1 < rand && rand <= rate_1 + rate_2)
		        return 2; //代表二等奖
		    else if (rate_2 + rate_1 < rand && rand <= rate_2 + rate_3 + rate_1)
		        return 3; //代表三等奖
		    else if (start < rand && rand < start + span)
		        return 4; //未中奖
		    else if (start + span < rand && rand < start + 2 * span)
		        return 5; //未中奖
		    else
		        return 0; //未中奖
		}; 
		$rotaryArrow.click(function(){
			var data = [0,1,2,3,4,5]; 
			data=raffle(0.2,0.3,0.2);//一，二，三等奖的概率,剩下的为未中奖的概率
			switch(data){
				case 1: 
					rotateFunc(1,60,'一等奖');
					break;
				case 5: 
					rotateFunc(2,120,'没有中奖哦');
					break;
				case 3: 
					rotateFunc(3,180,'三等奖');
					break;
				case 4: 
					rotateFunc(4,240,'没有中奖哦');
					break;
				case 2: 
					rotateFunc(5,300,'二等奖');
					break; 
				default:
					rotateFunc(0,0,'没有中奖哦');
			}
		});		
		var rotateFunc = function(awards,angle,text){  //awards:奖项，angle:奖项对应的角度
			$rotaryArrow.stopRotate();
			$rotaryArrow.rotate({
				angle: 0,
				duration: 5000,
				animateTo: angle + 2160,  //angle是图片上各奖项对应的角度，2160是让指针固定旋转6圈
				callback: function(){
					var username=$(".username");//姓名
					var userphone=$(".userphone");//电话
					var useraddress=$(".useraddress");//邮寄地址
					var usertel=$(".usertel");//手机号码
					var useremail=$(".useremail");//邮箱
					if(text=="一等奖"){
						$resultTxt.text(text); 
						usertel.hide();
						useremail.hide();
						$(".userinfo").show();
					    $(".userinfo p span").text(text).show();
					}else if(text=="二等奖"){
						$resultTxt.text(text);
						 username.hide();
						 userphone.hide();
						 useraddress.hide();
						 useremail.hide();
						$(".userinfo").show();
					    $(".userinfo p span").text(text).show();
					}else if(text=="三等奖"){
						$resultTxt.text(text);
						 username.hide();
						 userphone.hide();
						 useraddress.hide();
						 usertel.hide();
						$(".userinfo").show();
					    $(".userinfo p span").text(text).show();
					}else{
						$resultTxt.text(text);
					    $result.show();
					    $(".p_secor").show(); 
					    $(".sharebtn").show();
				        $(".drawBtn").hide();
					} 
				}
			});
		};
		
		//提交用户信息，领取奖品
		$(".submit_btn").on("click",function(){
			var username=$(".username").val();
			var userphone=$(".userphone").val();
			var useraddress=$(".useraddress").val();
			var usertel=$(".usertel").val();//手机号码
		    var useremail=$(".useremail").val();//邮箱
			var errorinfo=$(".errorInfo");
			var myreg =/^1\d{10}$/;//手机号码
			var myregphone=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;//手机和座机
			var myregEmail=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			errorinfo.text("");
		    var rxt=$(".userinfo .p_title span").text();
			if(rxt=="一等奖" && username==""){ 
				errorinfo.text("*姓名不能为空")
			}else if(rxt=="一等奖" && userphone==""){ 
				errorinfo.text("*联系电话不能为空");
			}else if(rxt=="一等奖" && !myregphone.test(userphone)){ 
				errorinfo.text("*请输入正确的联系方式");
			}else if(rxt=="一等奖" && useraddress==""){ 
				errorinfo.text("*邮寄地址不能为空");
			}else if(rxt==="二等奖" && usertel==""){ 
				errorinfo.text("*手机号码不能为空");
			}else if(rxt==="二等奖" && !myreg.test(usertel)){ 
				errorinfo.text("*请输入正确的手机号");
			}else if(rxt==="三等奖" && useremail==""){ 
				errorinfo.text("*邮箱不能为空");
			}else if(rxt==="三等奖" && !myregEmail.test(useremail)){ 
				errorinfo.text("*请输入正确的邮箱");
			}else{
				$(".div_form").css("z-index",0);
				$(".userinfo .p_title").css("z-index",0);
				$(".submit_win").show();
			} 
		});
		//点击分享
		$("#shareBtn").on("click",function(){
            $(".layerbg").css("opacity",0.8);
			$(".result").css("z-index",0);
			$(".share_line").show(); 
		});
		//点击知道了
		$(".imgnode").on("click",function(){
            $(".layerbg").css("opacity",0.6);
            $(".result").css("z-index",2);
			$(".share_line").hide();
		});
		//使用积分抽奖？
		$(".p_secor").on("click",function(){
			if($(".numbers").text()<=0){ 
				$(".divLayer .result").css("z-index",0);
				$(".submit_win").show(); 
			}else{
				 $resultTxt.text("没有中奖哦，确定消耗200积分继续抽奖吗？");
				 $(".p_secor").hide(); 
				 $(".sharebtn").hide();
				 $(".drawBtn").show().css("display","block");
			}
		});
		//确定用积分抽奖：
		$(".drawBtn").on("click",function(){ 
			console.log("ddd");
			if($(".numbers").text()>0){ 
				 score=score-200; 
				 $(".score").text(score);
		         $(".numbers").text(Math.floor(score/200));
				 $result.hide();
			}else{
				$(".divLayer .result").css("z-index",0);
				$(".submit_win").show(); 
			} 
		});
		//根据积分得出抽奖的次数
		var score=$(".score").text();
		var numbers=Math.floor(score/200);
		$(".numbers").text(numbers); 
		
		//签到：
		$(".sign_btn").on("click",function(){
			$(".divLayer").show();
		});
});