<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <form>
    <input type="text" v-model="person.name" />
    <button @click="login()">tijiao</button>
  </form>
</template>
<script>
import { reactive } from 'vue'
import loginApi from '../api/login'
export default {
  name: 'loginView',
  setup () {
    const person = reactive({
      name: 'duidui'
    })
    function login () {
      loginApi(person)
    }
    return {
      person,
      login
    }
  }
}
</script>
