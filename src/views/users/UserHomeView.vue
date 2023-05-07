<template>
  <div>这是用户首页</div>
  <el-button type="primary" @click="logout">登出</el-button>
  <el-button type="primary" @click="personinf">个人信息</el-button>
  <el-avatar :src="inf.headUrl"/>
  <input type="email" v-model="myemail.email">
  <el-button type="primary" @click="putemail">绑定邮箱</el-button>
  <div>
    </div>
    <from>
        <el-upload
    class="avatar-uploader"
    action=""
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeUpload"
  >
    <el-icon  class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
    <el-button type="primary" @click="head">头像</el-button>
    </from>
</template>

<script>
import LogoutApi from '@/api/logout'
import PersonInf from '@/api/personinf'
import HeadApi from '@/api/head'
import EmailApi from '@/api/myemail'
import { onMounted, reactive ,onBeforeMount,ref} from 'vue'
export default {
    nane:'UserHome',
    setup(){
        let myemail=reactive({
            email:''
        })
        let inf = reactive({
            headUrl:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        })
        let headurls = ref('')
        function logout(){
            const userId = localStorage.getItem('userId')
            const form = {
                userId:userId
            }
            LogoutApi(form)
            localStorage.clear()
        }
        function personinf(){
            PersonInf().then(res=>{
                console.log(res)
            })
        }
        function putemail(){
            let its = {
                email:'1130132722@qq.com'
            }
            console.log(myemail)
            EmailApi(its)
        }
        function beforeUpload(file,id) {
            const formData = new FormData();
            formData.append('image', file); // 将文件添加到 FormData 中
            HeadApi(formData)
                // 阻止默认的上传操作, 就不会产生如下图action为空报404错误的情况
            return false;
}
        onBeforeMount(()=>{
            PersonInf().then(res=>{
                headurls.value = 'http://'+inf.headUrl
                inf.headUrl = 'http://'+res.data.data.headUrl
                console.log(inf)
            })
        })
        return {
            logout,
            personinf,
            inf,
            beforeUpload,
            headurls,
            myemail,
            putemail
        }
    }

}
</script>

<style>
img{
    width: 200px;
    height: 200px;
}
</style>