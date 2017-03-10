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
				data=raffle(0.1,0.2,0.1);
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
						if(text=="一等奖"||text=="二等奖"||text=="三等奖"){
							$resultTxt.text(text); 
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
				var errorinfo=$(".errorInfo");
				var myreg =/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
				errorinfo.text("");
				if(username==""){ 
					errorinfo.text("*姓名不能为空")
				}else if(userphone==""){ 
					errorinfo.text("*联系电话不能为空");
				}else if(!myreg.test(userphone)){ 
					errorinfo.text("*请输入正确的电话号码");
				}else{
					$(".div_form").css("z-index",0);
					$(".userinfo .p_title").css("z-index",0);
					$(".submit_win").show();
				} 
			});
			//使用积分抽奖？
			$(".p_secor").on("click",function(){
				if($(".numbers").text()<=0){ 
					$(".divLayer .result").css("z-index",0);
					$(".submit_win").show(); 
				}else{
					 $resultTxt.text("没有中奖哦，确定消耗10积分继续抽奖吗？");
					 $(".p_secor").hide(); 
					 $(".sharebtn").hide();
					 $(".drawBtn").show().css("display","block");
				}
			});
			//确定用积分抽奖：
			$(".drawBtn").on("click",function(){ 
				console.log("ddd");
				if($(".numbers").text()>0){ 
					 score=score-10; 
					 $(".score").text(score);
			         $(".numbers").text(Math.floor(score/10));
					 $result.hide();
				}else{
					$(".divLayer .result").css("z-index",0);
					$(".submit_win").show(); 
				} 
			});
			//根据积分得出抽奖的次数
			var score=$(".score").text();
			var numbers=Math.floor(score/10);
			$(".numbers").text(numbers); 
		});