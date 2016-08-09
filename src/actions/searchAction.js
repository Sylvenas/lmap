import {cac} from '../utils/util';

export const RECEIVE_CRA_LIST = 'RECEIVE_CRA_LIST'
export const SET_KEYWORD = 'SET_KEYWORD'
export const PAGE_SIZE = 10
export const SET_SEARCH_ACTIVE=false

const receiveList = cac(RECEIVE_CRA_LIST, 'data', 'page')
const setKeyord = cac(SET_KEYWORD, 'value')
const setSearchActive = cac(SET_SEARCH_ACTIVE, false)

export const fetchList = (keyword, page = 1) => {
    return (dispatch, getState) => {
        if (!keyword)
            keyword = getState().search.keyword
        else
            dispatch(setKeyord(keyword))
        window.$.ajax({
            url: 'http://www.tngou.net/api/search',
            data: { keyword, name: 'topword', page, rows: PAGE_SIZE },
            dataType: 'jsonp',
            success: (data) => {
                if (data.status)
                    dispatch(receiveList(data, page))
                else{
                    let Rdata={};
                    Rdata.tngou=[{title:'中国',description:'伟大的国家'},{title:'奥运',description:'伟大的项目'}];
                    Rdata.total=10;
                    dispatch(receiveList(Rdata, page))
                }
            }
        })
    }
}


export const PUSH_CROSS_LIST = 'PUSH_CROSS_LIST'
export const PUSH_ROAD_LIST = 'PUSH_ROAD_LIST'
export const PUSH_AREA_LIST = 'PUSH_AREA_LIST'

export const pushCrossList = cac(PUSH_CROSS_LIST, 'list')