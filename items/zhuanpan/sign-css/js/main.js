$(function() {  
		//签到：
		$(".sign_btn").on("click",function(){
			$(".divLayer").show();
		});
		//签到遮罩层
		$("#sign_layer").on("click",function(){
			$(".divLayer").hide();
		})
});