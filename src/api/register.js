import MyRequest from './config'

const RegisterApi = (data) => {
  localStorage.clear()
  return MyRequest({
    url: '/user/register',
    method:'post',
    data
  })
}
export default RegisterApi
