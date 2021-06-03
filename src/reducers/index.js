import { combineReducers } from 'redux';
import catsReducer from 'reducers/cats';
import catImagesReducer from 'reducers/catImages';


export default combineReducers({
  cats: catsReducer,
  catImages: catImagesReducer,
})