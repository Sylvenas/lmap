import { combineReducers } from 'redux';
import { cr } from '../utils/util';
import { PUSH_CROSS_LIST, SET_RBOX_KEY } from '../actions/craAction';

export default combineReducers({
    cralist: cr([], {
        [PUSH_CROSS_LIST](state, {list}) { return list }
    }),
    rboxkey: cr([], {
        [SET_RBOX_KEY](state, {rboxkey}) { return rboxkey }
    })
})