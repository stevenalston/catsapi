import catData from 'apis/cats';
import { FETCH_CATS } from 'actions/types';

export async function fetchCats(count = 10) {
  const response = await catData.get('/breeds', {
    params: {
      limit: count,
      attach_breed: 1
    }
  });

  return {
    type: FETCH_CATS,
    payload: response.data
  }
}

// export async function fetchCatsBreed() {
//   const response = await catData.get('/breeds');

//   return {
//     type: FETCH_CATS_BREEDS,
//     payload: response.data
//   }
// }