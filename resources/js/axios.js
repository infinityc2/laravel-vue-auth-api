import axios from 'axios';
import store from './store'

const token = localStorage.getItem('auth-token')
if (!!token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

axios.interceptors.response.use(undefined, error => {
    return new Promise((resolve, reject) => {
        if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
            store.dispatch('authLogout')
        }
    })
})

export default axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 5000
})
