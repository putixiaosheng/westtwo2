<template>
  <div class="myform">
    <el-row>
    <el-col :span="17" class="left">
      <div class="hi">
        hi!
      </div>
      <div class="welcome">
        welcome
      </div>
    </el-col>
    <el-col :span="7" class="right">
      <div class="loginword">
        登录
      </div>
          <form>
            <div class="myinput">
            <el-icon :size="25">
            <User/>
            </el-icon>
            <input v-model="LoginForm.username"/>
          </div>
          <div class="myinput">
            <el-icon :size="25">
            <Lock/>
            </el-icon>
            <input v-model="LoginForm.password" type="password"/>
          </div>
          <div class="mybutton">
            <button @click="submitForm(LoginForm)">登录</button>
          </div>
          </form>
          <div class="tips">
            <a @click="toregister">没有账号？立即注册</a>
          </div>
          <div class="usproblem">
            常见问题
          </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import { reactive} from "vue";
import loginApi from "@/api/login";
import {useRouter} from 'vue-router'
export default {
  name:'loginview',
setup(){
//import { useRouter } from "vue-router";
    const router = useRouter();
    let LoginForm = reactive({
      username:'fys',
      password:'123456'
    })
    function submitForm(Form){
        loginApi(Form).then(res => {
          alert(res.data.message)
          let resdata = res.data
          if(resdata.code == 200){
            localStorage.setItem("token",resdata.data.token)
            localStorage.setItem("authority",resdata.data.authority)
            localStorage.setItem("userId",resdata.data.userId)
            console.log(resdata)
            router.push('/userhome')
          }
        }).catch(error=>{
          alert(error.data.message)
        })
    }
    function toregister(){
      router.push('/register')
    }
    return {
      LoginForm,
      submitForm,
      toregister
    }
}
}

</script>

<style scoped>
.el-row {
  margin-top: 50px;
  height: 430px;
  width: 892px;
  box-shadow: 0px 10px 100px 0px rgba(0,0,0,0.5);
}
.left{
  color: rgb(3,110,183);
  font-size: 80px;
  font-family: SimHei;
  font-weight:1000;
}
.left::before{
  background-size: cover;
  background-image: url('@/assets/loginbac.png');
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
}
.right{
  background-color: white;
  padding: 20px 20px 10px 10px;
}
.hi{
  margin-top: 130px;
  margin-left: 50px;
}
.welcome{
  text-align: center;
}

.loginword{
  color: black;
  font-size: 40px;
  font-family: SimSun;
  font-weight: 600;
}
.myinput{
  width: 100%;
  margin-top: 20px;
  display: flex;
  margin-left: 10px;
}
input{
  border-radius: 20px;
  background-color: rgb(242,242,242);
  height: 25px;
  border: none;
  width: 100%;
}
input:focus{
  outline: none;
}
.mybutton{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;
}
button{
  background-image: linear-gradient(to bottom right,rgb(1,119,180),rgb(5,164,147));
  width: 90%;
  height: 40px;
  border-radius: 25px;
  color: white;
  letter-spacing: 20px;
  text-align: center;
  text-indent: 20px;
  border: none;
  font-size: 15px;
}
.tips{
  width: 90%;
  height: 30px;
  text-align: center;
  -webkit-text-fill-color:transparent;
  background-image:linear-gradient(to bottom right,rgb(1,119,180),rgb(5,164,147)); 
  background-clip:text; 
  font-size: 2px;
  margin-left: 15px;
}
.usproblem{
  margin-top: 130px;
  margin-left: 150px;
  font-size: 2px;
}
.myform{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>