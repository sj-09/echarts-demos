funObj[2] = function () {
    var data = [
        [320, 302, 301, 334, 390, 330, 320],
        [120, 132, 101, 134, 90, 230, 210],
        [220, 182, 191, 234, 290, 330, 310],
        [150, 212, 201, 154, 190, 330, 410],
        [820, 832, 901, 934, 1290, 1330, 1320]
    ]
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
        },
        grid: {
            left: '3%',
            right: '20%',
            bottom: '3%',
            containLabel: true
        },
        yAxis:  {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                data: data[0]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '总量',
                data: data[1]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '总量',
                data: data[2]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '总量',
                data: data[3]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                stack: '总量',
                data: data[4]
            },
            {
                name: '总计',
                type: 'line',  // 平均值
                data: (function() {
                    let sum = []
                    for (let i in data) {
                        for (let j in data[i]) {
                            if(!sum[j]){
                                sum[j] = 0
                            }
                            sum[j] += data[i][j]
                        }
                    }
                    return sum
                })(),
                itemStyle: {
                    opacity: 0
                },
                lineStyle: {
                    opacity: 0
                },
                markLine: {
                    data: [
                        {
                            type: 'average',
                            name: '平均数',
                            label: {
                                normal: {
                                    position: 'end',
                                    formatter: '{b}: {c}'
                                }
                            }
                        }
                    ]
                }
            }
        ]
    };
    return option;
}
