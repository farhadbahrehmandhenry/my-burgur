import axios from 'axios';

var instance = axios.create({
  baseURL: 'https://my-biggest-burger.firebaseio.com'
}) 

export default instance;