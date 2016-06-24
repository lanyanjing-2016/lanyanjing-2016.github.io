/**
 * @author yue xin ming
 * @deprecated 领取优惠券
 * @date 2015-3-17
 */
/*倒计时*/
function remaintime(second){
	if(second==1){
		clearTimeout(setTimeout("remaintime(" + second + ")", 1000));
		$("#sms_show").hide();
		$("#sms_send").show();
	}else{
		second=second-1;
		$("#sms_time").html(second);
		setTimeout("remaintime(" + second + ")", 1000);
	} 
};
;(function(win,doc,undefind){ 
 	  $(function(){
	  	/*获取验证码*/
	  	  $("#sms_send").on("click",function(){ 
		  	  	var patt=/^1[0-9]{10}$/; 
		  	  	 if($("#mobile").val()==""){
		  	  	 	$("#errors_div").show();
		  	  	 	$("#errors_msg").html("手机号码不能为空");
		  	  	 }else if(!patt.exec($.trim($("#mobile").val()))){
		  	  	 	$("#errors_div").show();
		  	  	 	$("#errors_msg").html("请输入正确的手机号码");
		  	  	 }else{
		  	  	 	$("#errors_msg").val("");
		  	  	 	$("#errors_div").hide();
		  	  	 	$("#sms_send").hide();
		  	  	 	$("#sms_show").show();
		  	  	 	remaintime(60);
		  	  	 } 
	  	  }); 
	  })
	
})(window,document) 

      
 
