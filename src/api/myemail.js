import MyRequest from './config'

const EmailApi = (data)=>{
    return MyRequest({
        url:'/user/email',
        method:'put',
        data
    })
}
export default EmailApi