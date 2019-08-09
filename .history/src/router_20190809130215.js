import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DomainUser from './components/User'
import DomainJob from './components/Job'
import DomainCompany from './components/Company'
import DomainResume from './components/Resume'
import DomainAds from './components/Ads'
import DomainOther from './components/Other'

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
      path: '/user',
      name: 'DomainUser',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './components/User.vue')
      component: DomainUser
    },
    {
      path: '/job',
      name: 'DomainJob',
      component: DomainJob
    },
    {
      path: '/company',
      name: 'DomainCompany',
      component: DomainCompany
    },
    {
      path: '/resume',
      name: 'DomainResume',
      component: DomainResume
    },
    {
      path: '/ads',
      name: 'DomainAds',
      component: DomainAds
    },
    {
      path: '/other',
      name: 'DomainOther',
      component: DomainOther
    },
    {
      path: '/:domain/:methods',
      name: 'Detail',
      component: DomainDetail
    },
    {
      path: '/detail',
      name: 'Detail2',
      component: DomainDetail
    }
  ]
})
