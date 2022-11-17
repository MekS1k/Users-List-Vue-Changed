import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchUser from '../components/SearchUser'
import ListUser from '../components/ListUser'
import Info from '../components/info'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Info',
    name: 'info',
    component: Info
  },
  {
    path: '/Main',
    name: 'main',
    component: ListUser

  },
  {
    path: '/SearchUser',
    name: 'search',
    component: SearchUser

  }
]

const router = new VueRouter({
  routes
})

export default router
