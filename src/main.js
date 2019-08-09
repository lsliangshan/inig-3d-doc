import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { INIG } from '../../plugins-3d'

Vue.config.productionTip = false
INIG({
  platform: 13,   // 必填
  pagecode: 4020, // 必填
  appid: 'A23'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
