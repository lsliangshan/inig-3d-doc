import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { INIG } from '../../plugins-3d'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

// Vue.use(iView)

Vue.config.productionTip = false
INIG({
  platform: 13,   // 必填
  pagecode: 4020, // 必填
  appid: 'A23'
})

Vue.prototype.$toast = iziToast

iziToast.settings({
  position: 'topRight',
  // displayMode: 2,
  // transitionIn: 'flipInX',
  // transitionOut: 'flipOutX'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
