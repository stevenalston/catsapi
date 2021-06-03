import catData from 'apis';
import { FETCH_CAT_BREEDS, FETCH_CAT_IMAGES } from 'actions/types';

export async function fetchCatBreeds(count = 10) {
  const response = await catData.get('/breeds', {
    params: {
      limit: count,
      attach_breed: 1
    }
  });

  return {
    type: FETCH_CAT_BREEDS,
    payload: response.data
  }
}

export async function fetchCatImages(count = 10) {
  const response = await catData.get('/images/search', {
      params: {
        limit: count,
      }
  });

  return {
    type: FETCH_CAT_IMAGES,
    payload: response.data
  }
}