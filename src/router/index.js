import Vue from 'vue'
import Router from 'vue-router'
import mine from '../components/mine/mine.vue'
import find from '../components/find/find.vue'
import home from '../components/home/home.vue'
import messages from '../components/messages/messages.vue'
import homepage from '../components/home/homepage/homepage.vue'
import before from '../components/home/before/before.vue'
import after from '../components/home/after/after.vue'
import develop from '../components/home/develop/develop.vue'
import design from '../components/home/design/design.vue'
import product from '../components/home/product/product.vue'
import boildetail from '../components/boilDetail/boildetail.vue'
// import listdetail from '../components/listDetail/listDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: 'active',
  routes: [
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/messages',
      component: messages
    },
    {
      path: '/find',
      component: find
    },
    {
      path: '/boildetail',
      component: boildetail
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/',
          redirect: '/home/homepage'
        },
        {
          path: '/home/homepage',
          component: homepage
        },
        {
          path: '/home/before',
          component: before
        },
        {
          path: '/home/product',
          component: product
        },
        {
          path: '/home/design',
          component: design 
        },
        {
          path: '/home/after',
          component: after
        },
        {
          path: '/home/develop',
          component: develop
        }
      ]
    }
  ]
})
