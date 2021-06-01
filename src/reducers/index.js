import { combineReducers } from 'redux';
import catsReducer from 'reducers/cats';


export default combineReducers({
  cats: catsReducer,
})