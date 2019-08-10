import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import DomainUser from './components/User'
// import DomainJob from './components/Job'
// import DomainCompany from './components/Company'
// import DomainResume from './components/Resume'
// import DomainAds from './components/Ads'
// import DomainOther from './components/Other'

import DomainList from './components/List'
import DomainDetail from './components/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/:domain',
      name: 'List',
      component: DomainList
    },
    {
      path: '/:domain/:methods',
      name: 'Detail',
      component: DomainDetail
    }
  ]
})
