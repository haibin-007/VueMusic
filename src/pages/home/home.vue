<template>
  <div id="home_page">
    <head-top>
      <svg slot="left-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-maikefeng"></use>
      </svg>
      <input slot="search" type="text" class="search" :placeholder="searchTip">
      <router-link to='player' slot="right-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinle"></use>
        </svg>
      </router-link>
    </head-top>
    <nav class='home_nav'>
      <div class='nav_title'>
        <p :class="navNum == 1 ? 'on' : ''" @click='navNum=1'>音乐</p>
      </div>
      <div class='nav_title'>
        <p :class="navNum == 2 ? 'on' : ''" @click='navNum=2'>视频</p>
      </div>
      <div class='nav_title'>
        <p :class="navNum == 3 ? 'on' : ''" @click='navNum=3'>电台</p>
      </div>
    </nav>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import headTop from '../../components/header/headTop';
  import {getRecommendResource,getBannerResource} from '../../service/getData';
  import '../../plugins/swiper.min.js'
  import '../../plugins/swiper.min.css'
  export default {
    components: {
      headTop
    },
    props: [],
    mixins: [],
    data() {
      return {
        searchTip: '搜索音乐、歌词、电台',       //搜索框提示
        navNum: '1'                            //导航选中项序号
      }
    },
    created() {
      //数据预处理
    },
    mounted() {
      //请求数据
      //this.initData();
      getBannerResource();
      getRecommendResource();
      // var mySwiper = new Swiper('.swiper-container', {
      //   direction: 'vertical',
      //   loop: true,

      //   // 如果需要分页器
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },

      //   // 如果需要前进后退按钮
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },

      //   // 如果需要滚动条
      //   scrollbar: {
      //     el: '.swiper-scrollbar',
      //   },
      // })  
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
  .head_top{
    .search{
      @include wh(5.5rem,0.6rem);
      @include borderRadius(0.3rem);
      font-size: $f30;
      text-align: center;
    }
  }
  .home_nav{
    @include wh(100%,0.7rem);
    @include font($f30,0.7rem);
    text-align: center;
    display: flex;
    position: fixed;
    left: 0;
    top: 1rem;
    background-color: #fff;
    .nav_title{
      flex: 1;
    }
    .on{
      width: 0.8rem;
      margin: 0 auto;     
      border-bottom: 0.03rem solid $red;
    }
  }
  .swiper-container{
    margin-top: 1.7rem;
    @include wh(100%,3rem);
  }
</style>
