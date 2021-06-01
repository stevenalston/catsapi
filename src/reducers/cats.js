import { FETCH_CATS } from 'actions/types'

function cats(state = [], action) {
  switch (action.type) {
    case FETCH_CATS:
      const cats = (action.payload.data || []).map(cat => cat)
      return [...state, ...cats];
    default: 
      return state;
  }
}

export default cats;