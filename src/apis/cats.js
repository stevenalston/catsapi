import axios from 'axios';
import catsAPIKey from 'keys/catsAPI'

export default axios.create({
  baseURL: `https://api.thecatapi.com/v1/images/?${catsAPIKey}`
})