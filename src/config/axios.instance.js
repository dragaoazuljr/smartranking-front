import { config } from './config'
import axios from 'axios';

const axiosInstace = axios.create({
    baseURL: config.endpoints.gateway,
})

axiosInstace.interceptors.request.use(
    (config) => {
        let accessToken = localStorage.getItem('accessToken');
        if (accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    })

export default axiosInstace