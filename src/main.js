import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import './config/rem'

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app')
