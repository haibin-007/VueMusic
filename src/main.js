import Vue from 'vue'
import router from './router/router'
import store from './store/'
import FastClick from 'fastclick'
import './config/rem'
import './images/iconfont'

if ('addEventListener' in document) {     //消除点击延迟300ms，不需要双击
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
