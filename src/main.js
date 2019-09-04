import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { INIG } from '../../inig-3d'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

// Vue.use(iView)

Vue.config.productionTip = false
INIG({
  options: {
    platform: 13, // 必填
    pagecode: 4020, // 必填
    appid: 'A23',
    at: '22574ad9088f4441bdee6ddaf215a1f7',
    rt: '52c16fd691ae4d98ad405526a733dc71'
  },
  isServer: false
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
