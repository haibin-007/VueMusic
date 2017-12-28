import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '../config/env'
import App from '../App'

const HelloWorld = r => require.ensure([], () => r(require('../pages/HelloWorld/HelloWorld')), 'HelloWorld')
const Music = r => require.ensure([], () => r(require('../pages/Music/Music')), 'Music')

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
        name: 'HelloWorld',
        component: HelloWorld,
        meta: { keepAlive: true }
      },
      {
        path: '/music',
        name: 'Music',
        component: Music,
      }
    ]
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: routerMode,
  routes
})



