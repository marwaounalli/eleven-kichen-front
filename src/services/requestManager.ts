import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost',
});

export default Axios;
