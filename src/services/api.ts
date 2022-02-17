import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.100.4:3333',
    timeout: 2*1000
})

export default api