import axios from 'axios'
const service = axios.create({
  baseURL: 'http://8.130.44.99:9090',
  timeout: 60000,
  withCredentials:true,
  crossDomain:true,
  headers: {
    'Content-Type':"multipart/form-data"
  }
})
service.interceptors.request.use(config=>{
  config.headers['token'] = localStorage.getItem('token')
  return config
})
export default service