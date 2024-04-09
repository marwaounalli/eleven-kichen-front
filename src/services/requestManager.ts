import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://localhost/api',
});


export default Axios;
