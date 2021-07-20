<template>
  <div id="app">
    <router-link to="/demo01">Go to algorithm part</router-link>
    <router-link to="/index">Go to base javascript part</router-link>
    <router-view></router-view>
    <!-- <InputBind data="test data-binding for vue"></InputBind>
    <bind></bind>
    <prototype></prototype>
    <call></call>
    <apply></apply>
    <newt></newt> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import InputBind from './views/mvvm/InputBind.vue'
// import bind from './views/javascript/bind.vue'
// import prototype from './views/javascript/prototype.vue'
// import call from './views/javascript/call.vue'
// import apply from './views/javascript/apply.vue'
// import newt from './views/javascript/new.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  // InputBind,
  // bind,
  // prototype,
  // call,
  // apply,
  // newt,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
