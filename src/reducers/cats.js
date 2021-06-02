import { FETCH_CATS } from 'actions/types';

function cats(state = [], action) {
  switch (action.type) {
    case FETCH_CATS:
      const cats = (action.payload || []).map(cat => cat)
      return [...state, ...cats];
    // case FETCH_CATS_BREEDS:
    //   const catBreeds = (action.payload || []).map(cat => cat)
    //   return [...state, ...catBreeds];
    default: 
      return state;
  }
}

export default cats;