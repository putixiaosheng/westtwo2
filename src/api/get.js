import MyRequest from './config'

const getrequest = (data) => {
    return MyRequest({
        url:'/gets',
        method:'GET',
        params:data
    })
}
export default getrequest