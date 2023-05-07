import MyRequest from './config'

const loginApi = (data) => {
  localStorage.clear()
  return MyRequest({
    url: '/user/login',
    method:'post',
    data
  })
}
export default loginApi
