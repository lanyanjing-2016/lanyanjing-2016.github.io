//admin.js
$(function(){

	var m= $("meta[name='url']");  
    var content=m.attr("content");
    console.log(content);
    var fullHeight=$(window).height();
    var slideBarHeight=fullHeight-92;
    $(".admin-nav .active ul").css("height",slideBarHeight);
    
    // 给所有非.active的li加属性
	var m=0;
	var length=$("ul.admin-nav li ul li").length;
	console.log(length)
    for(var i=0;i<length;i++)
    {
    	if($("ul.admin-nav li ul li:eq("+i+")").hasClass("active"))
    	{
    		
    		for(var j=0;j<length;j++){
    			var n=i+j;
    			if($("ul.admin-nav li ul li:eq("+n+")").next().hasClass("active"))
    			{
    				break;
    			}
    			else{
    				$("ul.admin-nav li ul li:eq("+n+")").next().attr("name",m+"-"+j);	
    			}
    		}
    		m=m+1;
    	}
    }

    function goSlide(index)
    {
    	$("ul.admin-nav li ul li:not(.active)").hide();
    	$("ul.admin-nav li ul li[name^='"+index+"']").show();
    }
    function slideAll(){
    	$("ul.admin-nav li ul li.active").each(function(i){
    		$(this).click(function(){
    			$("ul.admin-nav li ul li:not(.active)").hide();
    			$("ul.admin-nav li ul li[name^='"+i+"']").show();			
    		})
    	})
    }
    slideAll();
    switch(content)
	{
	case "app":
	  goSlide(0);
	  break;
	case "bussiness":
	  //alert(11);
	  goSlide(1);
	  break;
	case "order":
	  goSlide(2);
	  break;
	case "help":
	  goSlide(3);
	  break;
	case "report":
	  goSlide(4);
	  break;
	case "system":
	  goSlide(5);
	  break;
	 
	default:
	  // goSlide(0);
	}
})