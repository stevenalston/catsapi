import { FETCH_CAT_BREEDS } from 'actions/types';

function cats(state = [], action) {
  switch (action.type) {
    case FETCH_CAT_BREEDS:
      const cats = (action.payload || []).map(cat => cat)
      return [...state, ...cats];
    default: 
      return state;
  }
}

export default cats;