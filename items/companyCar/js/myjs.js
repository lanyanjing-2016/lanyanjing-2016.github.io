;(function(win, doc, undefind) {
	$(function() {
		//手机号验证
		var myreg =/^1\d{10}$/;  
		//错误提示
		function errtip(text){
			$(".tips").text(text).show(0).delay(2000).hide(0);
		} 
	
		//注册提交
		$(".btn_regist").on("click",function(){
			if($("#loginName").val()==""){ 
			    errtip("用户名不能为空");
		   }else if($("#pwd").val()==""){ 
		    	errtip("密码不能为空");
		   }else if($("#userpwdTwo").val()==""){ 
		    	errtip("确认密码不能为空");
		    }else if($("#pwd").val().trim()!=$("#userpwdTwo").val().trim()){
		    	errtip("两次密码输入不一致");
		    	$("#userpwdTwo").val("");
		    }else if($("#contactName").val()==""){
		    	errtip("联系人姓名不能为空");
		    }else if($("#idcardNumber").val()==""){
		    	errtip("身份证号不能为空");
		    }else if(isIdCardNo($("#idcardNumber").val())==false){
		    	errtip("请输入正确的身份证号");
		    }else if($("#contactPhone").val()==""){
		    	errtip("联系人手机号不能为空");
		    }else if(!myreg.test($("#contactPhone").val())){
		    	errtip("请输入正确的联系人手机号");
		    }else if($("#businessFaren").val()==""){
		    	errtip("企业法人姓名不能为空");
		    }else if($("#companyName").val()==""){
		    	errtip("公司名称不能为空");
		    }else if($("#logo_thum").find("img").length==0){
		    	errtip("请上传企业logo图片")
		    }else if($("#license_thum").find("img").length==0){
		    	errtip("请上传企业执照图片")
		    }else if($("#companyPhone").val()==""){
		    	errtip("公司电话不能为空");
		    }else if($("#companyAdress").val()==""){
		    	errtip("公司地址不能为空");
		    }else if($("#companyNature").val()==""){
		    	errtip("公司性质不能为空");
		    }else if($("#companyKeyword").val()=="" || $("#companyKeyword").val()=="请输入公司业务描述"){
		    	errtip("公司业务描述不能为空");
		    }else if($("#companyDetail").val()=="" || $("#companyDetail").val()=="请输入公司简介"){
		    	errtip("公司简介不能为空");
		    }else if($("#companyOperateScope").val()=="" || $("#companyOperateScope").val()=="请输入公司经营范围"){
		    	errtip("公司经营范围不能为空");
		    }else{
		    	$("#regist").submit();
	    	    $("#regist").attr("disabled","disabled");
		    } 
		}); 
	    //车辆选择
	     $(".carselect_banner").on("click", function () { 
		        var obj = $(this);
		        var bak = function () {
		            var src = obj.find("img").attr("src");
		            if (src.indexOf("bottom_ico") != -1) { 
		               src = "images/top_ico.jpg"; 
		               obj.css({"margin-bottom":"0","color":"#3f9efa"});
		               
		            } else { 
		              src = "images/bottom_ico.jpg";
		              obj.css({"margin-bottom":"0.26666667rem","color":"#51a6f9"});
		            }
		            obj.find("img").attr("src", src); 
		        };
		        $(this).next().slideToggle(0, bak); 
   			 });
   			  
			 
	});
})(window, document)
 