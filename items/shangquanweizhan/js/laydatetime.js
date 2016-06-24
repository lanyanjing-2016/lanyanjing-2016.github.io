/**
 * @author yue xin ming
 * @deprecated 日期区间段设置js
 * @date 2016-03-10
 */
var start = {
	elem: '#startTime',
	format: 'YYYY/MM/DD ',
	min: laydate.now(), //设定最小日期为当前日期
	max: '2099-06-16', //最大日期
	istime: true,
	istoday: false,
	choose: function(datas) {
		end.min = datas; //开始日选好后，重置结束日的最小日期
		end.start = datas //将结束日的初始值设定为开始日
		$("#StimeYes").html(datas);
	}
};
var end = {
	elem: '#finishTime',
	format: 'YYYY/MM/DD',
	min: laydate.now(),
	max: '2099-06-16',
	istime: true,
	istoday: false,
	choose: function(datas) {
		start.max = datas; //结束日选好后，重置开始日的最大日期
		//		        $("#EtimeYes").html(datas); 
	}
};
laydate(start);
laydate(end);

/*开始时间结束时间控制*/ 
		!(function() {
			var start = {
				elem: '#startTime',
				format: 'YYYY.MM.DD',
				istime: true,
				istoday: false,
				max: laydate.now(),
				choose: function(datas) {
					startTime.max = datas; //结束日选好后，重置开始日的最大日期
				}
			};
			laydate(start);
		})();