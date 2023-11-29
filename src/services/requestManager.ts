import axios from 'axios'
import router from '@/router'
import store from '@/store'

const Axios = axios.create({
    baseURL: 'http://localhost'
})
export default Axios