$(function() {
			var fun=function(){
				/*.load_img ul li广告图   .traverpic_list ul li旅游页面，.washvip_card,.wash_shopaddress洗衣页面*/
				var main = $(".applist ul li,.load_img ul li,.traverpic_list ul li,.washvip_card,.wash_shopaddress,.edit_list,.rummery-con-nav ul li,.rummery-list li");
				/*鼠标划上显示可编辑区域*/
				main.each(function(i) {
					main.eq(i).on("mouseover", function() {
						h = main.eq(i).height(); 
						main.eq(i).children().last().css({"height": h,"display": "block"});
					})
					main.eq(i).on("mouseout", function() {
						main.eq(i).children().last().css({"height": "0","display": "none"});
					});	
				});
				/*广告图片移上显示编辑删除*/
				$("#carouselBox").on("mouseover",function(){
					$("#carouselBox .mask").show();
				}).on("mouseout",function(){
					$("#carouselBox .mask").hide();
				});
				/*点击广告图片裂变编辑或删除功能代码*/
				$(".arrow_edit").each(function(i){
					$(".arrow_edit").eq(i).on("click",function(){  
						$("#moduleEditDiv").show();
						$(".home_showcount").hide();
						$(".pic_mbedit").show();
					    $("#TB_overlayBG").show();
					})
				});
				$(".arrow_delete").on("click",function(){
						$(".carouselPics").remove(); 
				});
				/*点击编辑或删除功能代码*/
				$(".edit").each(function(i){
					$(".edit").eq(i).on("click",function(){
						$("#moduleEditDiv").show();
						$(".home_showcount").hide();
						$(".first_mbedit").show();
					    $("#TB_overlayBG").show();
					})
				});
				$(".delete").each(function(i){
					$(".delete").eq(i).on("click",function(){
						main.eq(i).remove();
					})
				});
			}
			fun();
			/*广告图编辑*/
			$(".load_list li").each(function(i){
				$(".load_list li").eq(i).on("click",function(){
					$(this).addClass("hover").siblings().removeClass("hover");
					var self=$(".load_list li").eq(i).index();
					$(".load_img li").css("display","none");
					$(".load_img li").eq(self).css("display","block");
					$(".loadeimg_edit").hide();
				});
			});
			$(".loadimg_edit").each(function(i){
				$(".loadimg_edit").eq(i).on("click",function(){
					$(".loadeimg_edit").show();
				})
			});
			/*第三步列表编辑*/
			$(".editlist_edit").each(function(i){
				$(".editlist_edit").eq(i).on("click",function(){
					$(".three_mbedit").hide();
					$(".four_mbedit").show();
				})
			});
			/*家电维修遮罩层start*/
			$(".decorate-con1,.decorate-con2,.decorate-con3").mouseover(function() {
				$(this).find(".decorate_mask").show();
			});
			$(".decorate-con1,.decorate-con2,.decorate-con3").mouseout(function() {
				$(this).find(".decorate_mask").hide();
			});
			/*新增功能*/
			$(document).on("click","#add_new",function(){
 				var html=$("#html").html();
				var length=$(".applist ul li").length; 
				var index=length-1; 
				if(length>1){
					$(html).insertAfter($(".applist ul li").eq(index));
				}else{
					$(html).insertAfter($("#html"));
				}
				fun();
				right();
			}); 
			var right=function(){
			  /*文本框鼠标点击添加背景边框*/
			   $(".mb_box ul li").click(function(){
					$(this).addClass("cur").siblings().removeClass("cur");
				});
			   var hidemode=function(){
			  	    $(".pic_mbedit").hide();
					$(".first_mbedit").hide();
					$(".three_mbedit").hide();
					$(".four_mbedit").hide();
					$(".second_mbedit").hide();
					$(".second_dialbedit").hide();
					$(".second_nonstopbedit").hide();
			  };
			   /*编辑模块  关闭按钮*/
				$(".web_close").on("click",function(){
					hidemode();
					$("#moduleEditDiv").hide(); 
					$("#TB_overlayBG").hide();//背景层 
				});
				/*第一步点击*/
				$("#first_btn").click(function(){ 
					hidemode();
					if($(".mb_box ul li:first-child").attr("class")=="cur"){
						$(".second_mbedit").show();
					}else if($(".mb_box ul li:nth-child(2)").attr("class")=="cur"){
						$(".second_dialbedit").show();
					}else{
						$(".second_nonstopbedit").show();
					}  
				});
				/*第二步点击*/
				$("#second_btn").click(function(){
					hidemode(); 
					$(".three_mbedit").show();
				});
				/*第三步点击*/
				$("#three_btn").click(function(){
					hidemode();
					$(".four_mbedit").show();
				});
				/*第四步点击*/
				$("#fouth_btn").click(function(){
					hidemode();
					$(".three_mbedit").show();
				});
				/*第二步返回箭头*/
				$(".second_backarrow").click(function(){
					hidemode();
					$(".first_mbedit").show();
				});
				/*第三步返回箭头*/
				$(".three_backarrow").click(function(){
					hidemode();
					$(".second_mbedit").show();
				});
				/*第四步返回箭头*/
				$(".four_backarrow").click(function(){
					hidemode();
					$(".three_mbedit").show();
				});
			}
			right();
});
	