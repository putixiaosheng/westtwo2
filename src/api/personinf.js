import MyRequest from './config'

const PersonInf = (data) => {
  return MyRequest({
    url: '/user',
    method:'get',
    data
  })
}
export default PersonInf