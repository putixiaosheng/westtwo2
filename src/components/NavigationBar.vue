<template>
      <div class="header-left">
          Hi!欢迎光临贸游兔！
        </div>
    <div class="header-right">
        <router-link to="/login">联系我们</router-link>|
        <router-link to="/register">个人中心</router-link>
    </div>
</template>

<script >
import {ref} from 'vue'
export default {
 name:'NavigationBar',
 setup(){
  return{

  }
 }
}
</script>

<style>
.router-link{
  color: white;
}
a{
  text-decoration: none;
  color:white
}
.header-left{
  float:left;
  margin-left: 100px;
  font-size: 15px;
  color: white;
}
.header-right{
  color: white;
  margin-right: 100px;
}
</style>