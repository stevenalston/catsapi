import axios from 'axios';
import { CATS_API_KEY } from 'keys'
import { FETCH_CATS } from 'actions/types';

export async function fetchCats(count = 10) {
  const response = await axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${CATS_API_KEY}&limit=${count}`);

  return {
    type: FETCH_CATS,
    payload: response
  }
}