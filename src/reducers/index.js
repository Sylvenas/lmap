import { combineReducers } from 'redux';
import search from './search';
import cra from './cra';

const rootReducer = combineReducers({
  search,
  cra
})

export default rootReducer