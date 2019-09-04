import Vue from 'vue'
import Router from 'vue-router'

import DomainList from './components/List'
import DomainDetail from './components/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/job'
    },
    {
      path: '/:domain',
      name: 'List',
      component: DomainList
    },
    {
      path: '/:domain/:method',
      name: 'Detail',
      component: DomainDetail
    }
  ]
})
