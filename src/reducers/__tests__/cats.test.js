import catsReducer from 'reducers/cats';
import { FETCH_CAT_IMAGES } from 'actions/types';

it('handles actions of type FETCH_CAT_IMAGES', () => {
  const action = {
    type: FETCH_CAT_IMAGES,
    payload: {
      data: [{cat: 'cat1'}]
    }
  }

  const newState = catsReducer([], action);
  console.log(newState)
  expect(newState).toEqual([{cat: 'cat1'}]);
});

it('handles action with unknown type', () => {
  const newState = catsReducer([], {});

  expect(newState).toEqual([]);
});