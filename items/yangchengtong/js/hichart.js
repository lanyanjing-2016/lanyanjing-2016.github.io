$(function () {
    //$(".highcharts-container text:last").remove();
    // 第1图表展示区域
    $('#container_1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '图表的名称'
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
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
    });
    // 第二个图表的区域
    //var arr1=["一月","一月","一月","一月","一月","一月","一月","一月","一月","一月","一月","一月"]
    var js=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    $('#container_2').highcharts({
        title: {
            text: '2013年-2015年商户总数报表',
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
                text: '商户数'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '(家)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2015年',
            data: [54,55,55,56,57,58,59,62,63,64,65,66]
        },{
            name: '2014年',
            data: [35,37,39,42,44,46,47,48,49,51,52,53]
        },{
            name: '2013年',
            data: [12,15,17,18,19,21,25,25,27,29,30,33]
        }]
    });
    var js=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    $('#container_4').highcharts({
        title: {
            text: '2013年-2015年新增商户数量报表',
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
                text: '新增商户数量'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '(家)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2015年',
            data: [8,7,10,6,9,6,8,10,11,9,8,12]
        },{
            name: '2014年',
            data: [4,9,7,5,7,6,11,8,12,4,5,5]
        },{
            name: '2013年',
            data: [8,12,4,6,9,8,11,3,9,12,6,5]
        }]
    });
    var js=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    $('#container_5').highcharts({
        title: {
            text: '2013年-2015年订单总数报表',
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
                text: '订单总数'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '(单)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2015年',
            data: [83,95,98,105,103,109,112,104,104,92,96,89]
        },{
            name: '2014年',
            data: [73,82,86,81,89,92,83,79,86,94,101,92]
        },{
            name: '2013年',
            data: [66,58,76,83,92,106,78,89,92,78,84,88]
        }]
    });
    var js=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    $('#container_6').highcharts({
        title: {
            text: '2013年-2015年新增订单数报表',
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
                text: '新增订单数'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '(单)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2015年',
            data: [36,22,39,46,53,47,41,30,35,29,37,40]
        },{
            name: '2014年',
            data: [29,36,42,35,28,37,46,51,39,35,27,32]
        },{
            name: '2013年',
            data: [35,27,22,41,30,36,28,43,52,29,46,39]
        }]
    });
    //第三个区域的图表
    $('#container_3').highcharts({
        chart: {
            type: 'column',
            margin: [ 50, 50, 100, 80]
        },
        title: {
            text: 'Worlds largest cities per 2008'
        },
        xAxis: {
            categories: [
                'Tokyo',
                'Jakarta',
                'New York',
                'Seoul',
                'Manila',
                'Mumbai',
                'Sao Paulo',
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
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
        },
        series: [{
            name: 'Population',
            data: [34.4, 21.8, 20.1, 20, 19.6, 19.5, 19.1],
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