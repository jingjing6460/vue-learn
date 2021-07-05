<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <InputBind data="test data-binding for vue"></InputBind>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import InputBind from './components/InputBind.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  InputBind
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
