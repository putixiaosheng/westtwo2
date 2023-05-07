<template>
    <el-row class="all">
    <el-col :span="8">
            <div class="person">
            <div class="top">
                <div class="middle">
                    <img src="@/assets/logo.png" class="personimg">
                    <button class="butlogin" @click="tologin">
                        登录
                    </button>
                    <button class="butregister" @click="toregister">
                        注册
                    </button>
                </div>
            </div>
            <div class="botton">
                <button class="wantbuy">我要买</button>
                <button class="wantsold">我要卖</button>
            </div>
            </div>
    </el-col>
    <el-col :span="16">
        <div class="mytable">
            <el-row>
            <el-col :span="4">
                <div class="gamelist">
                    <ul>
                        <li v-for="item in game" :key="item.id" @click="ck(item)" :class="[{active:item.id == activegame},{unactive:item.id != activegame}]">{{ item.game }}</li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="20">
            </el-col>
            </el-row>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import { reactive,ref} from 'vue'
import router from '@/router'
export default {
    name:"FirstPage",
    setup(){
    let game = reactive([{id:1,game:'热门游戏'},
                    {id:2,game:'网络游戏'},
                    {id:3,game:'客户端游戏'},
                    {id:4,game:'手机游戏'}
])
    let activegame = ref(2)
    function ck(item){
        activegame.value = item.id
    }
    function tologin(){
        router.push('/login')
    }
    function toregister(){
        router.push('/register')
    }
        return{
            game,
            activegame,
            ck,
            tologin,
            toregister
        }
    }
}
</script>

<style scoped>
.all{
    margin-top: 150px;
    height: 500px;
}
.person{
    border: solid;
    margin-left: 70px;
    height: 70%;
    width: 60%;
    margin-right: 50px;
}
.top{
    display: flex;
    position: relative;
    height: 80%;
}
.top::before{
    background-size: cover;
    background-image: url('@/assets/loginbac.png');
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: 0;
}
.bottom{
    height: 30%;
}
.middle{
    position: relative;
    z-index: 2;
    width: 100%;
    background-color: white;
    background: rgba(252,252,252,0.3);
    margin-top: 150px;
}
.middle::before{
    background-size: cover;
    z-index: 2;
    content: '';
    position:absolute;
    background-color: white;
    background: rgba(252,252,252,0.3);
    width: 160px;
    height: 80px;
    bottom: 130px;
    left: 65px;
    border-top-left-radius: 160px;
    border-top-right-radius: 160px;
}
.middle button{
    color: white;
    border-radius: 25px;
    border-style: none;
    height: 30px;
    width: 70%;
    margin-left: 40px;
}
.personimg{
    z-index: 2;
    width: 50px;
    position: absolute;
    left: 120px;
    bottom: 120px;
}
.butlogin{

    transition: 0.3s;
    position: absolute;
    z-index: 3;
    margin-top: 20px;
    background-image: linear-gradient(to bottom right,rgb(9,123,193),rgb(72,197,229));
}
.butlogin:hover{
    color: black 
}
.butregister{
    transition: 0.3s;
    position: absolute;
    z-index: 3;
    margin-top: 65px;
    background-image: linear-gradient(to bottom right,rgb(53,58,157),rgb(91,123,242));
}
.butregister:hover{
    color: black;
}
.botton button{
    width: 35%;
    height: 35px;
    border-radius: 25px;
    margin-top: 5px;
    margin-left: 27px;
    border-style: none;
    color: white;
}
.wantbuy{
    background-image: linear-gradient(to bottom right,rgb(16,152,70),rgb(131,196,60));
}
.wantsold{
    background-image: linear-gradient(to bottom right,rgb(219,217,35),rgb(246,159,25));
}
.mytable{
    height: 90%;
    width: 95%;
    border-style: solid;
}
.gamelist{
    height: 450px;
    width: 100%;
    background-color: white;
}
ul{
    margin-top: 0;
    list-style: none;
    padding: 0;
}
.unactive{
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: rgb(242,242,242);
    color: black;
}
.active{
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: black;
    color: red;
}
</style>