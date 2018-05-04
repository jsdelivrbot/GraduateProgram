import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import daysReducer from './daysReducer';
import galleriesReducer from './galleriesReducer';

export default combineReducers({
   events: eventsReducer,
   days: daysReducer,
   galleries: galleriesReducer
});