import {combineReducers} from 'redux';
import {cr} from '../utils/util';
import {PUSH_CROSS_LIST} from '../actions/craAction';

export default combineReducers({
    cralist: cr([], {
        [PUSH_CROSS_LIST](state, {list}) { return list }
    })
})