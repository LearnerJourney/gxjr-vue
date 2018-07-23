import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HeadComponents from '@/components/head/head'
import HeaderComponents from '@/components/header/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/head',
      name: 'head',
      component: HeadComponents
    },
    {
      path: '/header',
      name: 'header',
      component: HeaderComponents
    }
  ]
})
