import axios from 'axios';
import { CATS_API_KEY } from 'keys'

export default axios.create({
  baseURL: `https://api.thecatapi.com/v1`,
  headers: {
    'X-API-KEY': CATS_API_KEY
  },
})