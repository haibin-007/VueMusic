<template>
  <div>
    <img src="./images/logo.png">
    <router-view></router-view>
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
    console.log('11111');
    console.log(this.$router);
    console.log(this.$route);
    for(let i in this){
      console.log(i);
    }
    console.log(LoginCellphoneResource);
    getRecommendResource();
  }
}
</script>

<style lang="scss">
@import './style/reset';
</style>
