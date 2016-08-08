import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

// 加入了redux-thunk,初始化store
const initStore = (initialState) => {
    let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
    let store = createStoreWithMiddleware(reducers, initialState)
    return store
}

export default initStore