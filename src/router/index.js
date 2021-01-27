import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('components/home/home')
const About = () => import('../components/about/about')
const Shopcar = () => import('../components/shopcar/shopcar')
const Profile = () => import('../components/profile/profile')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  mode: 'history'
})
export default router
