;(function($){ 
	var Tab=function(tab){
		var _this_=this;
		//保存单个tab组件
		this.tab = tab;
		//默认配置参数
		this.config={
			"triggerType":"click",//用来定义鼠标的触发类型，是click还是mouseout
			"effect":"default",//用来定义内容切换效果，是直接切换还是淡入淡出效果
			"invoke":1,//默认展示第几个tab
			"auto":false//用来定义tab是否自动切换，当指定了时间，就按指定时间自动切换
		};
		
		//如果配置参数存在，就扩展掉默认的配置参数
		if(this.getConfig()){
			$.extend(this.config,this.getConfig());
		}
		
		//保存tab标签列表、保存对应的内容列表
		this.tabItems = this.tab.find(".tab_nav ul li");
	    this.contentItems = this.tab.find("div.content-wrap div.content-item");
	    
	    //保存配置参数
	    var config = this.config;
	    
	    if(config.triggerType === "click"){ 
	    	this.tabItems.bind("click",function(){ 
	    		_this_.invoke($(this));
	    	});
	    }else if(config.triggerType === "mouseover" || config.triggerType != "click"){
	    	this.tabItems.mouseover(function(){
	    		_this_.invoke($(this));
	    	});
	    };
	    
	    //自动切换，如果配置了切换时间，就按时间间隔进行自动切换
	    if(config.auto){
	    	//定义一个全局的定时器
	    	this.timer=null;
	    	//计数器
	    	this.loop=0;
	    	
	    	this.autoPlay();
	    	
	    	this.tab.hover(function(){
	    		window.clearInterval(_this_.timer);
	    	},function(){
	    		_this_.autoPlay();
	    	});
	    };
	    
	    //设置默认显示第几个tab
	    if(config.invoke >1){
	    	this.invoke(this.tabItems.eq(config.invoke-1));
	    };
	};
	Tab.prototype={
		//自动间隔时间切换
		autoPlay:function(){
			var _this_=this;
			var tabItems = this.tabItems;//临时保存tab列表
			var tabLength = tabItems.length;//tab的个数
			var config=this.config;
			
			this.timer=window.setInterval(function(){
				_this_.loop++;
				if(_this_.loop >= tabLength){
					_this_.loop = 0;
				};
				tabItems.eq(_this_.loop).trigger(config.triggerType);
			},config.auto);
		},
		//事件驱动函数
		invoke:function(currentTab){
			var _this_=this;
			/**
			 *要执行Tab的选中状态，当前选中的加上active
			 *切换Tab对应的内容，要根据配置参数的effect的值是default 还是fade
			**/
			var index=currentTab.index();
			//tab 选中状态
			currentTab.addClass("active").siblings().removeClass("active");
			//切换对应的内容区域
			var effect=this.config.effect;
			var conItems=this.contentItems;
			if(effect === "default" || effect != "fade"){
				conItems.eq(index).addClass("current").siblings().removeClass("current");
			}else if(effect === "fade"){
			    conItems.eq(index).fadeIn().siblings().fadeOut(); 
			};
			
			//注意：如果配置了自动切换，记得把当前的loop值设置成tab(index)的值
			if(this.config.auto){
				this.loop = index;
			}

		},
		//获取配置参数
		getConfig:function(){
			//拿一下 tab elem 节点上的data-config
			var config = this.tab.attr("data-config");
			
			//确保有配置参数
			if(config && config !=""){
				return $.parseJSON(config);
			}else{
				return null;
			}
		} 
	}; 
	
	//组测 成jq方法,不用每一个去new 一下；
	$.fn.extend({
		tab:function(){
			this.each(function(){
				new Tab($(this));
			});
			return this;
		}
	});
	window.Tab=Tab;
})(jQuery);
