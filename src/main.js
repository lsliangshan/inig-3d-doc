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
    at: '9d42b91018c549878c739ab83c1ba674',
    rt: '966aa42da3ff4f2782b197e7e859e4da'
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
