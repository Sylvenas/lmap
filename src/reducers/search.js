import {combineReducers} from 'redux';
import {cr} from '../utils/util';
import {RECEIVE_CRA_LIST, SET_KEYWORD, PAGE_SIZE,SET_RBOX_KEY} from '../actions/searchAction';

export default combineReducers({
    list: cr([], {
        [RECEIVE_CRA_LIST](state, {data}) { return data.tngou }
    }),
    totalPage: cr(0, {
        [RECEIVE_CRA_LIST](state, {data}) { return Math.ceil(data.total / PAGE_SIZE) }
    }),
    page: cr(1, {
        [RECEIVE_CRA_LIST](state, {page}) { return page }
    }),
    keyword: cr('', {
        [SET_KEYWORD](state, {value}) { return value }
    }),
    rboxKey: cr('', {
        [SET_RBOX_KEY](state, {rboxkey}) { return rboxkey }
    })
})