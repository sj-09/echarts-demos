function option2() {
    option = {
        color:["#fff","#ccc"],
        grid:{
            show:true,
            backgroundColor:"#2EBEFA"
        },
        title: {
            text: '良好',
            subtext: 'xx状况',
            x: 'center',
            y: 'center',
            textStyle : {
                color : '#fff',
                fontSize : 35
            },
            subtextStyle: {
                color: '#fff',
                fontSize: 20,
            }
        },
        series: [
            {
                name:'xx状况',
                type:'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false, //移动放大
                clockwise: false, //逆时针
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label:{
                    normal:{
                        show:false
                    }
                },
                // itemStyle : labelFromatter,
                data:[{
                    value:88,
                    name:"良好"
                },
                    {
                        value:12,
                        name:"other",
                        itemStyle : {
                            normal : {
                                color: 'rgba(255,255,255, 0.3)'
                            }
                        }
                    }

                ]
            }
        ]
    };
    return option;
}