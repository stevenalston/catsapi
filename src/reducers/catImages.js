import { FETCH_CAT_IMAGES } from 'actions/types';

function catImages(state = [], action) {
  switch (action.type) {
    case FETCH_CAT_IMAGES:
      const catImages = (action.payload || []).map(cat => cat)
      return [...state, ...catImages];
    default: 
      return state;
  }
}

export default catImages;