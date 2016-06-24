$(function () {
    $('#container_1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '提货券使用情况统计图'
        },
        tooltip: {
            pointFormat: '{point.percentage:.1f}%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                {
                    name: '使用数量',
                    y: 285.0,
                    sliced: true,
                    selected: true
                },
                ['过期数量',    36]
            ]
        }]
    });
    // 第二个图表的区域
    //var arr1=["一月","一月","一月","一月","一月","一月","一月","一月","一月","一月","一月","一月"]
    var js=['2015-1','2015-2','2015-3','2015-4','2015-5','2015-6','2015-7','2015-8','2015-9','2015-10','2015-11','2015-12'];
    $('#container_2').highcharts({
        title: {
            text: '2015年会员消费次数趋势统计表',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: ishua.com',
            x: -20
        },
        xAxis: {
            categories:js,
        },
        yAxis: {
            title: {
                text: '消费次数'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '(次)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [
        {name: '消费次数',
            data: [223,365,288,423,123,388,412,500,250,321,265,333]
        }
        ]
    });
    //第三个区域的图表
    $('#container_3').highcharts({
        chart: {
            type: 'column',
            margin: [ 50, 50, 100, 80]
        },
        title: {
            text: '门店会员增长人数统计图'
        },
        xAxis: {
            categories: [
                '中关村店',
                '世纪广场店',
                '五棵松店',
                '国贸店',
            ],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '增长人数'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '会员增长人数: <b>{point.y:.1f} 人</b>',
        },
        series: [{
            name: 'Population',
            data: [52, 23, 48, 66],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });
    var js=['2015-1','2015-2','2015-3','2015-4','2015-5','2015-6','2015-7','2015-8','2015-9','2015-10','2015-11','2015-12'];
    $('#container_4').highcharts({
        title: {
            text: '2015年活跃会员人数趋势统计表',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: ishua.com',
            x: -20
        },
        xAxis: {
            categories:js,
        },
        yAxis: {
            title: {
                text: '活跃会员人数'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '(人)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [
        {name: '活跃会员人数',
            data: [200,500,600,1000,1200,1200,1400,1500]
        }
        ]
    });
    var js=['2015-1','2015-2','2015-3','2015-4','2015-5','2015-6','2015-7','2015-8','2015-9','2015-10','2015-11','2015-12'];
    $('#container_5').highcharts({
        title: {
            text: '2015年业绩得分统计图',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: ishua.com',
            x: -20
        },
        xAxis: {
            categories:js,
        },
        yAxis: {
            title: {
                text: '业绩（分）'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '(分)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [
        {name: '业绩得分',
            data: [60,48.2,35,66,72.4,68.9,120.5,100.3,78.8,90.3,150.9,200]
        }
        ]
    });
    var js=['2015-1','2015-2','2015-3','2015-4','2015-5','2015-6','2015-7','2015-8','2015-9','2015-10','2015-11','2015-12'];
    $('#container_6').highcharts({
        title: {
            text: '2015年交易总额分统计图',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: ishua.com',
            x: -20
        },
        xAxis: {
            categories:js,
        },
        yAxis: {
            title: {
                text: '交易总额（万元）'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '(万元)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [
        {name: '交易总额',
            data: [150.8,120,155,168.6,135,166,145.2,180,232.8,250,280.9,300]
        }
        ]
    });
    $('#container_7').highcharts({
        chart: {
            type: 'column',
            margin: [ 50, 50, 100, 80]
        },
        title: {
            text: '门店充值总额统计图'
        },
        xAxis: {
            categories: [
                '中关村店',
                '五棵松店',
                '世纪广场店',
                '国贸店',
            ],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '充值交易总额'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '充值总额: <b>{point.y:.1f} 元</b>',
        },
        series: [{
            name: 'Population',
            data: [23000, 30000, 18000, 20000],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });
    $('#container_8').highcharts({
        chart: {
            type: 'column',
            margin: [ 50, 50, 100, 80]
        },
        title: {
            text: '门店消费总额统计图'
        },
        xAxis: {
            categories: [
                '中关村店',
                '五棵松店',
                '世纪广场店',
                '国贸店',
            ],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '消费总额'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '消费总额: <b>{point.y:.1f} 元</b>',
        },
        series: [{
            name: 'Population',
            data: [42500, 36000, 56825, 36500],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });
    
    //订单模块的图表1（柱状图）
    $('#container_dingdan_1').highcharts({
        chart: {
            type: 'column',
            margin: [ 50, 50, 80, 80]
        },
        title: {
            text: '2015年每月新增订单统计'
        },
        xAxis: {
            categories: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月'
            ],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: '微软雅黑'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '人数区间'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '增长订单数: <b>{point.y:.1f} 单</b>',
        },
        series: [{
            name: '订单',
            data: [34, 21, 20, 12, 19, 35, 19],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });
    //订单模块图标2（饼状图）
    $('#container_dingdan_2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '订单金额分布区间统计'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '占比',
            data: [
                ['1-10元',   45.0],
                ['11-20元',       26.8],
                {
                    name: '21到30元之间',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['31到40元之间',    8.5],
                ['41到50元之间',     6.2],
                ['51元以上',   0.7]
            ]
        }]
    });
    //账号模块的图表1（柱状图）
    $('#container_zhanghao_1').highcharts({
        chart: {
            type: 'column',
            margin: [ 50, 50, 80, 80]
        },
        title: {
            text: '2015年每月新增收入统计'
        },
        xAxis: {
            categories: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月'
            ],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: '微软雅黑'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '总金额'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '总金额: <b>{point.y:.1f} 元</b>',
        },
        series: [{
            name: '金额',
            data: [34, 21, 20, 12, 19, 35, 19],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });
    //账号模块图标2（饼状图）
    $('#container_zhanghao_2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '每月收入占比统计'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '占比',
            data: [
                ['1月',   45.0],
                ['2月',       26.8],
                {
                    name: '3月',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['4月',    8.5],
                ['5月',     6.2],
                ['6月',   0.7]
            ]
        }]
    });
    //去版权的代码，必须放到jquery的最后面
    $(".highcharts-container").each(function(i){
        $(".highcharts-container:eq("+i+") text:last").remove();
    })
    //最后结束的位置
});		