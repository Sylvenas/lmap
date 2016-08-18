import {cac} from '../utils/util';

// 设置rboxkey
export const SET_RBOX_KEY = 'SET_RBOX_KEY'
const setRboxKey = cac(SET_RBOX_KEY, 'rboxkey')


// search点击事件
export const RECEIVE_CRA_LIST = 'RECEIVE_CRA_LIST'
export const SET_KEYWORD = 'SET_KEYWORD'
export const PAGE_SIZE = 1

const receiveList = cac(RECEIVE_CRA_LIST, 'data', 'page')
const setKeyord = cac(SET_KEYWORD, 'value')

export const fetchSearchList = (keyword, rboxkey, page = 1) => {
    return (dispatch, getState) => {

        dispatch(setRboxKey(rboxkey))

        if (!keyword && keyword != '') {
            keyword = getState().search.keyword
        } else {
            dispatch(setKeyord(keyword))
        }
        window.$.ajax({
            url: 'http://www.tngou.net/api/search',
            data: { keyword, name: 'topword', page, rows: PAGE_SIZE },
            dataType: 'jsonp',
            success: (data) => {
                if (data.status) {
                    dispatch(receiveList(data, page))
                }
                else {
                    let Rdata = {};
                    Rdata.tngou = [{ title: '中国', description: '你好' }, { title: '奥运', description: '伟大的项目' }];
                    Rdata.total = 2;
                    dispatch(receiveList(Rdata, page))
                }
            }
        })
    }
}












// 路口路段区域事件
export const PUSH_CROSS_LIST = 'PUSH_CROSS_LIST'
export const PUSH_ROAD_LIST = 'PUSH_ROAD_LIST'
export const PUSH_AREA_LIST = 'PUSH_AREA_LIST'

export const pushCrossList = cac(PUSH_CROSS_LIST, 'list')

export const fetchCrossList = (rboxkey) => {
    return (dispatch, getState) => {
        dispatch(setRboxKey(rboxkey))
        var keyword = 1, page = 1;
        window.$.ajax({
            url: 'http://www.tngou.net/api/search',
            data: { keyword, name: 'topword', page, rows: PAGE_SIZE },
            dataType: 'jsonp',
            success: (data) => {
                if (data.status) {
                    let Rdata = {};
                    Rdata.tabelData = [{ rank: 0, name: '延陵中路-和平北路(延陵中路-和平北路)', index: 2.56, hierarchy: '严重拥堵' },
                        { rank: 1, name: '延陵中路-桃园路', index: 2.56, hierarchy: '严重拥堵' },
                        { rank: 2, name: '延陵中路-丹青路', index: 2.56, hierarchy: '严重拥堵' },
                        { rank: 3, name: '桃园路-延陵中路', index: 2.56, hierarchy: '中度拥堵' },
                        { rank: 4, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
                        { rank: 5, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
                        { rank: 6, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
                        { rank: 7, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
                        { rank: 8, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
                        { rank: 9, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
                        { rank: 10, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
                        { rank: 11, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
                        { rank: 12, name: '友谊路-克山路', index: 2.56, hierarchy: '轻度拥堵' },
                        { rank: 13, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 14, name: '友谊路-sdsad克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 15, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 16, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 17, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 18, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 19, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 20, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 21, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 22, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 23, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 24, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 25, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 26, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 27, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 28, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 29, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 30, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 31, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 32, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 33, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 34, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 35, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 36, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 37, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
                        { rank: 38, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }
                    ];
                    Rdata.lv1 = 12042141;
                    Rdata.lv2 = 21;
                    Rdata.lv3 = 22312;
                    Rdata.lv4 = 23213;
                    Rdata.lv5 = 24;
                    Rdata.geoDate = {
                        "type": "FeatureCollection",
                        "features": [
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.91, 31.85] }, "properties": { "index": 9.9, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.74] }, "properties": { "index": 2.1, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.939, 31.81] }, "properties": { "index": 3, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.952, 31.79] }, "properties": { "index": 4, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.945, 31.76] }, "properties": { "index": 8, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.953, 31.77] }, "properties": { "index": 6, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.957, 31.842] }, "properties": { "index": 8.8, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.956, 31.836] }, "properties": { "index": 8, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.957, 31.81] }, "properties": { "index": 9, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.95, 31.795] }, "properties": { "index": 1, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.75] }, "properties": { "index": 5.5, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.949, 31.819] }, "properties": { "index": 3, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.958, 31.791] }, "properties": { "index": 2, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.946, 31.76] }, "properties": { "index": 4, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.777] }, "properties": { "index": 9.5, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.950, 31.81] }, "properties": { "index": 5, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.96, 31.771] }, "properties": { "index": 9.6, 'name': '延陵中路' } },
                            { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.954, 31.799] }, "properties": { "index": 9, 'name': '延陵中路' } }
                        ]
                    };
                    dispatch(pushCrossList(Rdata))
                }
                else {
                    let Rdata = {};
                    Rdata.tngou = [{ title: '日本', description: '岛国' }, { title: '猫咪', description: '可爱的动物' }];
                    Rdata.total = 2;
                    dispatch(pushCrossList(Rdata, page))
                }
            }
        })
    }
}
