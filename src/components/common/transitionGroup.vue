<template>
  <transition 
    :name="transition"  
    mode="out-in">
    <!-- v-on:before-enter="beforeEnter"   -->
    <!-- v-on:after-enter="afterEnter" -->
    <slot></slot>
  </transition>

</template>
<script type="text/javascript">
  export default {
    components: {

    },
    props: {
      transition: {
        type: String,
        default: 'fade',
      }
    },
    mixins: [],
    data() {
      return {

      }
    },
    created() {
      //数据预处理
    },
    mounted() {
      //请求数据
      //this.initData();
    },
    computed: {
    },
    methods: {

    },
    watch: {

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .translate-enter-active, .translate-leave-active {
    transition: all .5s
  }
  .translate-enter, .translate-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    transform: translate(-100%, 0);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0;
  }
</style>
