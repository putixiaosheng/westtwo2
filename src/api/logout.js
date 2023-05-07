import MyRequest from './config'

const loginoutApi = (data) => {
  localStorage.removeItem('token')
  return MyRequest({
    url: '/user/logout',
    method:'post',
    data
  })
}
export default loginoutApi
