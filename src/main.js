import Vue from 'vue'
import router from './router/router'
import store from './store/'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import './config/rem'
import './images/svg/iconfont'

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false


if ('addEventListener' in document) {     //消除点击延迟300ms，不需要双击
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueLazyload, {
  // loading: 'src/images/img/loading.gif',
})

//首页欢迎页判断加载
// if(true){
//   router.push('wecome');
// }

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')

