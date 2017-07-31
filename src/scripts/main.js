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
    }]
}

powerChart.setOption(powerOption);

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

var completedTaskChart = echarts.init(document.getElementById('completed-task'));

var completedTaskOption = {
    tooltip: {},
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
