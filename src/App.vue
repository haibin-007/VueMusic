<template>
  <div>
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
  export default {
    mounted () {
      console.log('%c HeavenBin', 'background-image:-webkit-gradient( linear, left top,right top, color-stop(0, #00a419),color-stop(0.15, #f44336), color-stop(0.29, #ff4300),color-stop(0.3, #AA00FF),color-stop(0.4, #8BC34A), color-stop(0.45, #607D8B),color-stop(0.6, #4096EE), color-stop(0.75, #D50000),color-stop(0.9, #4096EE), color-stop(1, #FF1A00));color:transparent;-webkit-background-clip:text;font-size:13px;');
    }
  }
</script>

<style lang="scss">
  @import './style/common';
  .router-fade-enter-active,
  .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter,
  .router-fade-leave-active {
    opacity: 0;
  }
</style>
