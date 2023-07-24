import axios from 'axios';

export default axios.create({
  //baseURL: 'https://api.samuraiwars.online', //SITE
  baseURL: 'http://localhost:4001', //DEV
});
