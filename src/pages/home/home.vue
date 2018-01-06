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
    <nav class='home_nav zx10'>
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
        <div v-for="item in swiperUrl" :key class="swiper-slide">
          <img :src="item.pic" alt="" class="swiper_img">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>.

<script type="text/javascript">
  import headTop from '../../components/header/headTop';
  import {getBannerResource} from '../../service/getData';
  import Swiper from 'swiper';
  import '../../style/swiper.min.css';
  export default {
    components: {
      headTop
    },
    props: [],
    mixins: [],
    data() {
      return {
        searchTip: '搜索音乐、歌词、电台',       //搜索框提示
        navNum: '1',                           //导航选中项序号
        swiperUrl: [],                         //轮播图地址
      }
    },
    created() {
      //数据预处理
    },
    mounted() {
      //请求数据
      this.initData();
    },
    computed: {

    },
    methods: {
      async initData(){
        getBannerResource().then(res => {
          this.swiperUrl = [...res.banners];
        }).then(() => {
          new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
        });
      }
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
    margin-top: 1.73rem;
    @include wh(100%,3rem);
    .swiper_img{
      @include wh(100%,100%);
    }
  }
</style>
