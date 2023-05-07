import MyRequest from './configg'

const HeadApi = (data)=>{
    return MyRequest({
        url:'/user/head',
        method:'put',
        data
    })
}
export default HeadApi