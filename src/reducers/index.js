import { combineReducers } from 'redux';
import ministries from './ministries_reducers';
import news from './newsReducers';

const rootReducer = combineReducers({
    ministries,
    news
  })
  
  export default rootReducer;