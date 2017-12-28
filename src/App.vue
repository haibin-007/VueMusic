<template>
  <div>
    <img src="./images/logo.png">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import {getRecommendResource} from './service/getData'
import {LoginCellphoneResource} from './config/server'
export default {
  data() {
    return{

    }
  },
  created() {
    // console.log('11111');
    // console.log(this.$router);
    // console.log(this.$route);
    // for(let i in this){
    //   console.log(i);
    // }
    // console.log(LoginCellphoneResource);
    // getRecommendResource();
  }
}
</script>

<style lang="scss">
  @import './style/common';
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
