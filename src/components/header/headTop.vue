<template>
    <header id='head_top'>
      <slot name='left'>
        <svg aria-hidden="true" >
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-tinggeshiqu"></use>
        </svg>
        
      </slot>
      <slot name="title"></slot>
      <slot name='right'></slot>
    </header>
  </template>
  <script type="text/javascript">
    // import {} from './';
    export default {
      components: {
  
      },
      props: [],
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
    #head_top {
      position: fixed;
      left: 0;
      right: 0;
      @include fj();
    }
  </style>
  