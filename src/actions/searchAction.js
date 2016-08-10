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

export const fetchSearchList = (keyword,rboxkey, page = 1) => {
    return (dispatch, getState) => {

        dispatch(setRboxKey(rboxkey))

        if (!keyword&&keyword!='') {
            keyword = getState().search.keyword
        } else {
            dispatch(setKeyord(keyword))
        }
        window.$.ajax({
            url: 'http://www.tngou.net/api/search',
            data: { keyword, name: 'topword', page, rows: PAGE_SIZE },
            dataType: 'jsonp',
            success: (data) => {
                if (data.status){
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

export const fetchCrossList=(rboxkey)=>{
    return (dispatch, getState) => {
        dispatch(setRboxKey(rboxkey))

        // window.$.ajax({
        //     url: 'http://www.tngou.net/api/search',
        //     data: { keyword, name: 'topword', page, rows: PAGE_SIZE },
        //     dataType: 'jsonp',
        //     success: (data) => {
        //         if (data.status)
        //             dispatch(receiveList(data, page))
        //         else {
        //             let Rdata = {};
        //             Rdata.tngou = [{ title: '日本', description: '岛国' }, { title: '猫咪', description: '可爱的动物' }];
        //             Rdata.total = 2;
        //             dispatch(receiveList(Rdata, page))
        //         }
        //     }
        // })
    }
}
