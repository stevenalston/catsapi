import catData from 'apis/cats';
import { CATS_API_KEY } from 'keys'
import { FETCH_CATS_IMAGES, FETCH_CATS_BREEDS } from 'actions/types';

export async function fetchCatsImages(count = 10) {
  const response = await catData.get('/images/search', {
    params: {
      limit: count
    }
  });

  return {
    type: FETCH_CATS_IMAGES,
    payload: response.data
  }
}

export async function fetchCatsBreeds() {
  const response = await catData.get('/breeds');

  return {
    type: FETCH_CATS_BREEDS,
    payload: response.data
  }
}