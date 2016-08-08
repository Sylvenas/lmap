import {cac} from '../utils/util';

export const RECEIVE_CRA_LIST = 'RECEIVE_CRA_LIST'
export const SET_KEYWORD = 'SET_KEYWORD'
export const PAGE_SIZE = 10

const receiveList = cac(RECEIVE_CRA_LIST, 'data', 'page')
const setKeyord = cac(SET_KEYWORD, 'value')

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
            }
        })
    }
}