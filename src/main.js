import Vue from 'vue'
import App from './App.vue'
import vueCodeditor from "vue-codeditor";

import router from './router/index'

Vue.component('vue-codeitor',vueCodeditor)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
