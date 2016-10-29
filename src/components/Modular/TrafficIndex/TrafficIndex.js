import React from 'react';
import L from 'leaflet';
import * as lmap from '../../../libs/lmap';

class TrafficIndex extends React.Component {
    constructor(){
        super();
        this.state={
            overlayer:null
        }
    }
    OD() {
        var overlay = new lmap.echartsLayer('OD',echarts);
        var chartsContainer = overlay.getEchartsContainer();
        var myChart = overlay.initECharts(chartsContainer);
        window.onresize = myChart.onresize;
        var option = {
            color: ['gold', 'aqua', 'lime'],
            dataRange: {
                min: 0,
                max: 100,
                color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    name: '北京 Top10',
                    type: 'map',
                    mapType: 'none',
                    data: [],
                    geoCoord: {
                        '上海': [121.4648, 31.2891],
                        '包头': [110.3467, 41.4899],
                        '北京': [116.4551, 40.2539],
                        '南宁': [108.479, 23.1152],
                        '南昌': [116.0046, 28.6633],
                        '大连': [122.2229, 39.4409],
                        '常州': [119.4543, 31.5582],
                        '广州': [113.5107, 23.2196],
                        '重庆': [107.7539, 30.1904]
                    },
                    markLine: {
                        smooth: true,
                        effect: {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data: [
                            [{ name: '北京' }, { name: '上海', value: 95 }],
                            [{ name: '北京' }, { name: '广州', value: 90 }],
                            [{ name: '北京' }, { name: '大连', value: 80 }],
                            [{ name: '北京' }, { name: '南宁', value: 70 }],
                            [{ name: '北京' }, { name: '南昌', value: 60 }],
                            [{ name: '北京' }, { name: '包头', value: 30 }],
                            [{ name: '北京' }, { name: '重庆', value: 20 }],
                            [{ name: '北京' }, { name: '常州', value: 10 }]
                        ]
                    },
                    markPoint: {
                        symbol: 'emptyCircle',
                        symbolSize: function (v) {
                            return 10 + v / 10
                        },
                        effect: {
                            show: true,
                            shadowBlur: 0
                        },
                        itemStyle: {
                            normal: {
                                label: { show: false }
                            },
                            emphasis: {
                                label: { position: 'top' }
                            }
                        },
                        data: [
                            { name: '上海', value: 95 },
                            { name: '广州', value: 90 },
                            { name: '大连', value: 80 },
                            { name: '南宁', value: 70 },
                            { name: '南昌', value: 60 },
                            { name: '包头', value: 30 },
                            { name: '重庆', value: 20 },
                            { name: '常州', value: 10 }
                        ]
                    }
                }
            ]
        };
        overlay.setOption(option);
        map.panTo(map.getCenter());
        this.setState({
            overlayer:overlay
        })
    }
    Delete(){
        this.state.overlayer.removeLayer();
        map.flyTo([58.41, 120.355]);
    }
    render() {
        return (
            <div>
                <h1 onClick={() => this.OD()}>迁徙图</h1>
                <h1 onClick={() => this.Delete()}>删除</h1>
            </div>
        )
    }
}

export default TrafficIndex