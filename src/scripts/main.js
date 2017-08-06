// 能量折线图
var powerChart = echarts.init(document.getElementById('power'));

var powerOption = {
    tooltip: {
        trigger: 'axis',
        formatter: '<strong>{c0}</strong><br>{b0}',
        textStyle: {

        },
        extraCssText: 'text-align: center;'
    },
    xAxis: {
        axisTick: {
            alignWithLabel: true
        },
        axisPointer: {
            label: {
                // formatter: params => {
                //     return '能量值 ' + params.value + (params.seriesData.length ? ': ' + params.seriesData[0].data : '');
                // }
            }
        },
        data: ["7月2日","7月3日","7月4日","7月5日","7月6日","7月7日","7月8日"]
    },
    yAxis: {
        type: 'value',
        boundaryGap: true
    },
    series: [{
        type: 'line',
        data: [15, 16, 5, 16, 16, 18, 15],
        areaStyle: {
            normal: {
                color: '#e8e8e8'
            }
        }
    }],
    color: ['#617fde']
}

powerChart.setOption(powerOption);

// 完成率饼图
var completeRateChart = echarts.init(document.getElementById('complete-rate'));

var completeRateOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{c}<br>{b}',
        extraCssText: 'text-align: center;'
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 22, name: '已完成'},
                {value: 11, name: '未完成'}
            ]
        }
    ]
}

completeRateChart.setOption(completeRateOption);

// 最佳工作日柱状图
var bestWorkdayChart = echarts.init(document.getElementById('best-workday'));

var bestWorkdayOption = {
    tooltip: {
        trigger: 'axis',
        formatter: '{c}<br>{b}',
        extraCssText: 'text-align: center;'
    },
    xAxis: {
        data: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisPointer: {
            label: {
                show: true
            }
        }
    },
    yAxis: {
        show: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            type: 'bar',
            barWidth: 11,
            itemStyle: {
                normal: {
                    barBorderRadius: 6,
                    color: 'rgba(0,0,0,.05)'
                }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: [50, 50, 50, 50, 50, 50, 50],
            animation: false,
            tooltip: {
                show: false
            }
        },
        {
            type: 'bar',
            barWidth: 11,
            itemStyle: {
                normal: {
                    barBorderRadius: 6
                }
            },
            data: [0, 50, 50, 15, 20, 0, 0]
        }
    ]
}

bestWorkdayChart.setOption(bestWorkdayOption);

// 已完成任务数柱状图
var completedTaskChart = echarts.init(document.getElementById('completed-task'));

var completedTaskOption = {
    tooltip: {
        position: function (point, params, dom, rect, size) {
             // 固定在顶部
             return [(2 * rect.x + rect.width - size.contentSize[0]) / 2, rect.y - size.contentSize[1] - 10];
         }
    },
    xAxis: {
        data: ["7月2日","7月3日","7月4日","7月5日","7月6日","7月7日","7月8日"],
    },
    yAxis: {},
    series: [{
        name: '已完成',
        type: 'bar',
        data: [15, 24, 5, 15, 1, 18, 18]
    }]
}

completedTaskChart.setOption(completedTaskOption)
