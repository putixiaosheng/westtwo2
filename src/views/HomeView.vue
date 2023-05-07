<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <navigation-bar></navigation-bar>
      </el-header>
      <el-main>
        <div class="shadow">
          <img src="../assets/logo.png"  class="logo">
          贸游兔
        </div>
        <div class="content">
            <router-view/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '../components/NavigationBar.vue'
export default {
  name: 'HomeView',
  components: {NavigationBar}
}
</script>
<style scoped>
/* a{
  text-decoration: none;
  color:black;
} */
.el-header{
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
}
.shadow{
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(45,49,142);
  font-size: 50px;
  font-family: SimSun;
  background-color:white;
  width: 97.8%;
  box-shadow: 0px 0px 100px 0px rgba(0,0,0,0.5);
  height: 80px;
  margin-bottom: 10px;
  position:absolute;
  z-index:10;
}
.el-main{
  justify-content: flex-start;
  height: 700px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-wrap: wrap;
  align-content:flex-start
}
.content{
  position: relative;
  height: 650px;
  width:100%;
  background-color: rgb(230, 230, 230);
}

.logo{
  width: 50px;
  margin-right: 50px;
}
</style>
