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
      <div class="registerword">
        注册
      </div>
          <form>
            <div class="myinput">
            <input v-model="RegisterForm.username" placeholder="输入手机号"/>
          </div>
          <div class="myinput">
            <input v-model="RegisterForm.code" placeholder="输入验证码" id="inpcode"/>
            <button id="bucode">获取验证码</button>
          </div>
          <div class="myinput">
            <input v-model="RegisterForm.password" type="password" placeholder="输入密码"/>
          </div>
          <div class="myinput">
            <input v-model="surepassword" type="password" placeholder="确定密码"/>
          </div>
          <div class="mybutton">
            <button @click="submitForm(RegisterForm)">注册</button>
          </div>
          </form>
          <div class="tips">
            已有账号？立即登录
          </div>
          <div class="usproblem">
            常见问题
          </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import { reactive,ref} from "vue";
import RegisterApi from '@/api/register';
import {useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const surepassword = ref()
    const RegisterForm = reactive({
      username:"",
      password: "",
    })
    function submitForm(RegisterForm){
        RegisterApi(RegisterForm).then(res=>{
          alert(res.data.message)
          router.push('/login')
        })
    }
    return {
        RegisterForm,
        surepassword,
        submitForm
    };
  },
};
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

.registerword{
  color: black;
  font-size: 40px;
  font-family: SimSun;
  font-weight: 600;
}
.myinput{
  width: 100%;
  margin-top: 20px;
  display: flex;
  margin-left: 15px;
}
input{
  border-radius: 20px;
  background-color: rgb(242,242,242);
  height: 25px;
  border: none;
  font-size: 6px;
  width: 80%;
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
}
.usproblem{
  margin-top: 50px;
  margin-left: 150px;
  font-size: 2px;
}
#inpcode{
  width: 40%;
}
#bucode{
  width:40%;
  height: 25px;
  font-size: 0.5px;
  text-align: center;
  text-indent: 0px;
  letter-spacing: 0px;
}
.myform{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>