import * as types from '../constants/ActionTypes';

export function searchChange(value) {
    return{
        type:types.SEARCH_CHANGE,
        searchValue:value
    }
}