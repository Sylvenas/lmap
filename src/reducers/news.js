import {combineReducers} from 'redux';
import {cr} from '../utils/util';
import {SEARCH_CRA_LIST} from '../actions/news';

export default combineReducers({
    list: cr([], {
        [SEARCH_CRA_LIST](state, {list}) { return list }
    }
    )
})