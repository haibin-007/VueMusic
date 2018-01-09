import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '../config/env'
import App from '../App'

const Wecome = r => require.ensure([], () => r(require('../pages/wecome/wecome')), 'Wecome')

const Home = r => require.ensure([], () => r(require('../pages/home/home')), 'Home')
const Player = r => require.ensure([], () => r(require('../pages/player/player')), 'Player')
const Fm = r => require.ensure([], () => r(require('../pages/fm/fm')), 'Fm')
const Everyday = r => require.ensure([], () => r(require('../pages/everyday/everyday')), 'Everyday')
const Songlist = r => require.ensure([], () => r(require('../pages/songlist/songlist')), 'Songlist')
const Rank = r => require.ensure([], () => r(require('../pages/Rank/rank')), 'Rank')


const routes =[
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/wecome'
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        // meta: { keepAlive: true }
        children:[
          {
            path:'fm',
            name: 'Fm',
            component: Fm,
          },
          {
            path:'everyday',
            name: 'Everyday',
            component: Everyday,
          },
          {
            path:'songlist',
            name: 'Songlist',
            component: Songlist,
          },
          {
            path:'rank',
            name: 'Rank',
            component: Rank,
          },
        ]
      },
      {
        path: '/player',
        name: 'Player',
        component: Player,
        // meta: { keepAlive: true }
      },
    ]
  },
  {
    path: '/wecome',      //欢迎页
    name: 'Wecome',
    component: Wecome,
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: routerMode,
  routes
})



