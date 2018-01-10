<template>
  <div id="home_page">
    <!-- 表头开始 -->
    <head-top>
      <svg slot="left-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-maikefeng"></use>
      </svg>

      <input slot="search" type="text" class="search" :placeholder="searchTip" @focus="console.log('123');">
      <router-link to='player' slot="right-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinle"></use>
        </svg>
      </router-link>
    </head-top>
    <!-- 表头结束 -->
    <!-- 导航开始 -->
    <nav class='home_nav zx10'>
      <div class='nav_title'>
        <p @click='navNum=0'>音乐</p>
      </div>
      <div class='nav_title'>
        <p @click='navNum=1'>视频</p>
      </div>
      <div class='nav_title'>
        <p @click='navNum=2'>排行</p>
      </div>
    </nav>
    <div class="bar" :class="barMove">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <!-- 导航结束 -->
    <!-- 隔板开始 -->
    <div class="top_wall"></div>
    <!-- 隔板结束 -->
    <!-- 主体开始 -->
    <transition-group>
      <div v-show="navNum == 0">
        <!-- 轮播图开始 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="(item,index) in swiperUrl" :key="index" class="swiper-slide">
              <img :src="item.pic" alt="" class="swiper_img">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <!-- 轮播图结束 -->
        <!-- 链接开始 -->
        <section class='clear'>
          <router-link class='link-fm left' tag="li" to='fm'>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fm"></use>
            </svg>
            <span>私人FM</span>
          </router-link>
          <router-link class='link-everyday left' tag="li" to='everyday'>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-rili"></use>
            </svg>
            <span>每日推荐</span>
          </router-link>
          <router-link class='link-songlist left' tag="li" to='songlist'>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
          </router-link>
          <router-link class='link-rank left' tag="li" to='rank'>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ttpodicon"></use>
            </svg>
            <span>排行榜</span>
          </router-link>
        </section>
        <!-- 链接结束 -->
        <!-- 推荐歌单开始 -->
        <section class="recommond">
          <router-link to='songlist' class="recommend_title">
            <span class="">推荐歌单</span>
          </router-link>
          <ul class="recommondlist">
            <router-link v-for="(item,index) in recommend" tag="li" to='songlist' :key="index">
              <div class="list_img">
                <img v-lazy="item.picUrl" alt="预览图">
                <!-- <loading class="loading" v-if=""></loading> -->
                <aside>
                  <span class="list_count">
                    {{item.playCount}}万
                  </span>
                </aside>
              </div>
              <p class="list_title ellis">
                {{item.name}}
              </p>
            </router-link>
          </ul>
        </section>
        <!-- 推荐歌单结束 -->
        <!-- 独家放送开始 -->
        <section class="special">
          <router-link to='' class="special_title">
            <span class="">{{specialName}}</span>
          </router-link>
          <div class="special_list">
            <router-link to="" class="item" v-for="(item,index) in special" :key="index" v-if="index > 0">
              <img v-lazy="item.sPicUrl" alt="">
              <p class="ellis">{{item.copywriter}}</p>
            </router-link>
          </div>
          <router-link to="" class="special_advert" v-for="(item,index) in special" :key="index" v-if="index == 0">
            <img v-lazy="item.picUrl" alt="">
            <p class="ell">{{item.copywriter}}</p>
          </router-link>
        </section>
        <!-- 独家放送结束 -->
        <!-- 最新音乐开始 -->
        <section class="newsong">
          <router-link to='' class="newsong_title">
            <span class="">最新音乐</span>
          </router-link>
          <ul class="newsonglist">
            <router-link v-for="(item,index) in newSong" tag="li" to='' :key="index">
              <div class="list_img">
                <img v-lazy="item.song.album.picUrl" alt="预览图">
              </div>
              <p class="list_title ell">
                {{item.name}}
              </p>
              <p class="author ell">
                {{item.song.artists[0].name}}
              </p>
            </router-link>
          </ul>
        </section>
        <!-- 最新音乐结束 -->
        <!-- 推荐MV开始 -->
        <section class="mv">
          <router-link to='' class="mv_title">
            <span class="">推荐MV</span>
          </router-link>
          <div class="mv_list">
            <router-link to="" class="item" v-for="(item,index) in mv" :key="index">
              <img v-lazy="item.picUrl" alt="">
              <p class="list_title ell">{{item.name}}</p>
              <p class="author ell">{{item.artists[0].name}}</p>
            </router-link>
          </div>
        </section>
        <!-- 推荐MV结束 -->
        <!-- 主播电台开始 -->
        <section class="djprogram">
          <router-link to='' class="djprogram_title">
            <span class="">主播电台</span>
          </router-link>
          <ul class="djprogram_list">
            <router-link v-for="(item,index) in djProgram" tag="li" to='' :key="index">
              <div class="list_img">
                <img v-lazy="item.picUrl" alt="预览图">
                <aside>
                  <span class="list_author">
                    {{item.program.radio.name}}
                  </span>
                </aside>
              </div>
              <p class="list_title ellis">
                {{item.name}}
              </p>
            </router-link>
          </ul>
        </section>
        <!-- 主播电台结束 -->
      </div>
    </transition-group>
    <transition-group>
      <div v-show="navNum == 1">
        <part-video></part-video>
      </div>
    </transition-group>
    <transition-group>
      <div v-show="navNum == 2">
        <part-rinking>

        </part-rinking>
      </div>
    </transition-group>
    <!-- 主体结束 -->
    <!-- 隔板开始 -->
    <div class="bottom_wall"></div>
    <!-- 隔板结束 -->
    <!-- 底部开始 -->
    <foot-guide optionNum="find">
    </foot-guide>
    <!-- 底部结束 -->
  </div>
</template>

<script type="text/javascript">
  import headTop from '../../components/header/headTop';
  import footGuide from '../../components/footer/footGuide';
  import transitionGroup from '../../components/common/transitionGroup';
  import partVideo from './partVideo/partVideo';
  import partRinking from './partRinking/partRinking';
  // import loading from '../../components/common/loading';
  import {
    getBannerResource,
    getPersonalizedResource,
    getPrivatecontentResource,
    getNewsongResource,
    getPersonalizedmvResource,
    getDjprogramResource,
    getLogincellphoneResource,
  } from '../../service/getData';
  import Swiper from 'swiper';
  import '../../style/swiper.min.css';
  export default {
    components: {
      headTop,
      footGuide,
      transitionGroup,
      partVideo,
      partRinking,
      // loading
    },
    props: [],
    mixins: [],
    data() {
      return {
        searchTip: '搜索音乐、歌词、电台',       //搜索框提示
        navNum: 0,                           //导航选中项序号
        barMove: 'move0',                 //跟着导航移动的bar           
        swiperUrl: [],                         //轮播图地址
        recommend: [],                         //推荐歌单
        special: [],                           //独家放送
        specialName: '',                       //独家放送name
        newSong: [],                           //最新音乐
        mv: [],                                //推荐MV
        djProgram: [],                         //推荐电台

      }
    },
    created() {
      //数据预处理

    },
    mounted() {
      this.initData();
    },
    computed: {

    },
    methods: {
      async initData() {
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
        getPersonalizedResource().then(res => {
          for (let item of res.result) {
            item.playCount = Math.round(item.playCount / 10000);
          }
          this.recommend = [...res.result].slice(0, 6);
        });
        getPrivatecontentResource().then(res => {
          this.special = res.result;
          this.specialName = res.name;
        })
        getNewsongResource().then(res => {
          this.newSong = [...res.result].slice(0, 6);
        })
        getPersonalizedmvResource().then(res => {
          this.mv = [...res.result];
        });
        getDjprogramResource().then(res => {
          this.djProgram = [...res.result];
        });
      }
    },
    watch: {
      navNum: function (value) {
        this.barMove = 'move' + this.navNum;
        console.log(this.barMove);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .head_top {
    .search {
      @include wh(5.5rem, 0.6rem);
      @include borderRadius(0.3rem);
      font-size: $f30;
      text-align: center;
    }
  }

  .home_nav {
    @include wh(100%, 0.7rem);
    @include font($f30, 0.7rem);
    opacity: 0.95;
    text-align: center;
    display: flex;
    position: fixed;
    left: 0;
    top: 1rem;
    background-color: #fff;
    .nav_title {
      flex: 1;
      height: 100%;
    }
  }

  .bar {
    @include wh(33.3%, 0.03rem);
    transition: all 0.375s;
    position: fixed;
    display: flex;
    left: 0;
    top: 1.7rem;
    &.move0 {
      transform: translatex(0);
    }
    &.move1 {
      transform: translatex(100%);
    }
    &.move2 {
      transform: translatex(200%);
    }
    :nth-child(1),
    :nth-child(3) {
      flex: 3;
    }
    :nth-child(2) {
      flex: 3;
      background: $red;
    }
  }

  .top_wall {
    margin-top: 1.73rem;
  }

  /* .swiper-content{
    .swiper-slide{height:10px}    .swiper-slide-active { height:auto}
  } */

  .swiper-container {
    @include wh(100%, 3rem);
    .swiper_img {
      @include wh(100%, 100%);
    }
  }

  .link-fm,
  .link-everyday,
  .link-songlist,
  .link-rank {
    @include wh(25%, 1.8rem);
    padding: 0.2rem 0.3rem;
    border-bottom: 0.01rem solid $gray;
    text-align: center;
    .icon {
      color: $red;
      @include wh(75%, 75%);
    }
    span {
      font-size: $f25;
    }
  }

  .recommend_title,
  .special_title,
  .newsong_title,
  .mv_title,
  .djprogram_title {
    @include wh(100%, 1rem);
    padding: 0.2rem 0;
    span {
      padding: 0 0.2rem;
      border-left: 0.03rem solid $red;
      font-size: $f35;
      position: relative;
      @include leftArrows();
    }
  }

  .recommondlist,
  .newsonglist,
  .djprogram_list {
    display: flex;
    flex-wrap: wrap;
    li {
      @include wh(33.3%, 3.5rem);
      padding-right: 0.1rem;
      &:nth-child(3n) {
        padding-right: 0;
      }
      .list_img {
        position: relative;
        /* .loading{
          @include center;
        } */
        img {
          @include wh(100%, 2.5rem);
          @include lazybook;
        }
        .list_count {
          position: absolute;
          top: 0.1rem;
          right: 0.2rem;
          color: #fff;
        }
        .list_author {
          position: absolute;
          bottom: 0.1rem;
          left: 0.1rem;
          color: #fff;
        }
      }
      .list_title {
        padding: 0.1rem 0 0 0.1rem;
        font-size: $f25;
      }
      .author {
        padding-left: 0.1rem;
        @include sc($f25, $fontGray);
      }
    }
  }

  .special_list {
    @include wh(100%, 3rem);
    @include fj();
    .item {
      @include wh(49.5%, 100%);
      img {
        @include wh(100%, 68%);
        @include lazyopacity;
      }
      p {
        padding: 0.1rem 0 0 0.1rem;
        font-size: 0.25rem;
      }
    }
  }

  .special_advert {
    margin-bottom: 0.5rem;
    img {
      @include wh(100%, 2.8rem);
      @include lazyopacity;
    }
    p {
      padding-top: 0.1rem;
      font-size: 0.25rem;
      text-align: center;
    }
  }

  .mv_list {
    @include wh(100%, auto);
    @include fj();
    flex-wrap: wrap;
    .item {
      @include wh(49.5%, 3rem);
      img {
        @include wh(100%, 68%);
        @include lazyopacity;
      }
      .list_title {
        padding: 0.1rem 0 0 0.1rem;
        font-size: 0.25rem;
      }
      .author {
        padding-left: 0.1rem;
        @include sc($f25, $fontGray);
      }
    }
  }

  .bottom_wall {
    margin-top: 1.2rem;
  }
</style>
