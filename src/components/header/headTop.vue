<template>
    <header class='head_top zx10'>
      <slot name='left-icon'></slot>
      <slot name='search'></slot>
      <section class="head_title ell" v-if="headTitle">
        <span>{{headTitle}}</span>
      </section>
      <slot name='right-icon' ></slot>
      
    </header>
  </template>
  <script type="text/javascript">
    // import {} from './';
    export default {
      components: {
  
      },
      props: ['headTitle'],
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
    .head_top {
      position: fixed;
      left: 0;
      top: 0;
      @include wh(100%,1rem);
      background-color: $red;
      @include fj();
      align-items: center;
      padding: 0 0.2rem;
      .head_title{
        @include sc(0.15rem,#fff);
      }
    }

  </style>
  