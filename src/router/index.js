import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HeadTopComponents from '@/components/headTop/headTop'
import HeadBottomComponents from '@/components/headBottom/headBottom'
import SwiperComponents from '@/components/common/swiper'
import InvestComponents from '@/components/invest/invest'
import LoginComponents from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/headTop',
      name: 'headTop',
      component: HeadTopComponents
    },
    {
      path: '/headBottom',
      name: 'headBottom',
      component: HeadBottomComponents
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: SwiperComponents
    },
    {
      path: '/invest',
      name: 'invest',
      component: InvestComponents
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponents
    }
  ]
})
