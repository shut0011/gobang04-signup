import Vue from 'vue'
import VueRouter from 'vue-router'

//import Home from '../views/Home.vue'

const Home = () => import('views/home/Home.vue')
const Setting = () => import('views/setting/Setting.vue')
const Change = () => import('views/change/Change.vue')
const About = () => import('views/about/About.vue')

Vue.use(VueRouter)

// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }
// const originalReplace = VueRouter.prototype.replace
// VueRouter.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/change',
    component: Change
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL

})

export default router
