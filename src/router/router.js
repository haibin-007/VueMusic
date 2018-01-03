import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '../config/env'
import App from '../App'

const Home = r => require.ensure([], () => r(require('../pages/home/home')), 'Home')
const Player = r => require.ensure([], () => r(require('../pages/player/player')), 'Player')

const routes =[
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        // meta: { keepAlive: true }
      },
      {
        path: '/player',
        name: 'Player',
        component: Player,
        // meta: { keepAlive: true }
      },
    ]
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: routerMode,
  routes
})



