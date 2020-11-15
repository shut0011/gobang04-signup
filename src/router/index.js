import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Setting = () => import('views/setting/Setting.vue')
const Change = () => import('views/change/Change.vue')
const About = () => import('views/about/About.vue')
const Page = () => import('views/page/Page.vue')
const SignUp = () => import('views/signup/SignUp.vue')

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
    redirect: '/home',
    component: Page,
    children: [{
      path: '/home',
      name: 'home',
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
    }]
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL

})

export default router
