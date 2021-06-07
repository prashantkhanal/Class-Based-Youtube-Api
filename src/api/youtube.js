import axios from 'axios';
import api from '../baseUrl';

const KEY = 'AIzaSyCg7Yk9Vizu7fZWANKG-6Svtb3-awGyKKc';

export default axios.create({
  baseURL: api,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
