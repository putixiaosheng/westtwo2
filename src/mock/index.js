import Mock from 'mockjs'
Mock.setup({
    xhrFields:{
        withCredentials:true
    }
})
Mock.mock('/user/login','post',function(){
  console.log('ttt')
  return {
    code:200,
    massage:'OK',
    name:'xx'
}
}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':'X-Requested-with',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'X-Powered-By':'3.2.1'
    }
  })
  Mock.mock('/user/login','option',{
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
  })
