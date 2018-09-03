import { combineReducers } from 'redux';
import dateReducer from './date';

export default combineReducers({
  date: dateReducer
})