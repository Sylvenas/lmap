import {SEARCH_CHANGE} from '../constants/ActionTypes';

const initState = {
    search_Value: ''
};

export default function refreshRbox(state=initState,action) {
    console.log(action.type);
    console.log(state.search_Value);
    switch (action.type) {
        case SEARCH_CHANGE:
            return Object.assign({}, state, {
                search_Value:action.searchValue
            });
        default:
            return state;
    }
}