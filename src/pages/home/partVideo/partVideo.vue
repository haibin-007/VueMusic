<template>
  <section class="video">
    <ul>
      <li class="video-list" v-for="(item,index) in video" :key="index">
        <div @click="showControls(index)">
          <video ref="video" class="content" :src="item.source" width="100%" height="100%" preload="auto">
            <source :src="item.source" type='video/mp4' />
          </video>
          <!-- 播放暂停按钮 -->
          <div class="video-control" @click="play(index)" v-show="item.isControlShow&&!item.loading">
            <img src="./playing.svg" alt="播放" v-show="!item.isPlay">
            <img src="./timeOut.svg" alt="暂停" v-show="item.isPlay">
          </div>
          <div class="loading" v-show="item.loading">
            <mv-loading></mv-loading>
          </div>
          <div class="content-control" v-show="item.isControlShow&&!item.loading&&item.isPlayShow">
            <!--视频播放时间-->
            <div class="display-time">
              <span class="current-time">{{item.currentTime}}</span> /
              <span class="total-time">{{item.durationTime}}</span>
            </div>
            <!--全屏播放按钮-->
            <div class="fullScreen-btn" @click="setFullScreen(index)">
              <img class="fullScreen" src="./fullScreen.svg" alt="全屏">
            </div>
          </div>
          <!-- 进度条 -->
          <div ref="progress" class="video-progress" v-show="item.isPlayShow">
            <div class="video-buffered-progress" :style="{'width': `${item.posBuffered}%`}"></div>
            <div class="video-current-progress" :style="{'width': `${item.posCurrent}%`}"></div>
            <div ref="drager" :style="{'left': `${item.posCurrent}%`}" class="dot" v-show="item.isControlShow&&!item.loading&&item.isPlayShow"></div>
          </div>
        </div>
        <div class="info">
          <div class="title">
            <p class="ell">{{item.name}}</p>
          </div>
          <div class="support">
            <svg slot="left-icon" class="icon" aria-hidden="true" style="color:#000;">
              <use xlink:href="#icon-like"></use>
            </svg>
            <p>{{item.likeCount}}</p>
          </div>
          <div class="talk">
            <svg slot="left-icon" class="icon" aria-hidden="true" style="color:#000;">
              <use xlink:href="#icon-buoumaotubiao48"></use>
            </svg>
            <p>{{item.commentCount}}</p>
          </div>
          <div class="share">
            <svg slot="left-icon" class="icon" aria-hidden="true" style="color:#000;">
              <use xlink:href="#icon-plus-share"></use>
            </svg>
            <p>{{item.shareCount}}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script type="text/javascript">
  import mvLoading from '../../../components/common/mvloading';
  import {
    getPersonalizedmvResource,
    getMvResource,
  } from '../../../service/getData';
  // import {} from './';
  export default {
    components: {
      mvLoading
    },
    props: {
    },
    mixins: [],
    data() {
      return {
        video: [],                  //video各个选项
        // videoIndex: '',                  //当前操作的视频序号
      }
    },
    created() {
      //数据预处理
      // this.$root.$on('mvdata',(val) => {
      //   console.log(val);
      // });

    },
    mounted() {
      this.initData();
      this.reload();
    },
    computed: {

    },
    methods: {
      async initData() {
        let res = await getPersonalizedmvResource()
        for (let item of res.result) {
          getMvResource(item.id).then(res => {
            // console.log(res);
            this.video.push({
              shareCount: res.data.shareCount,          //分享次数
              commentCount: res.data.commentCount,      //评论次数
              likeCount: res.data.likeCount,            //点赞次数
              name: res.data.name,
              source: '/api/mv/url?url=' + res.data.brs[240],
              loading: false,    //是否在加载中
              isPlay: false,     //是否在播放
              isPlayShow: false, //是否已经初始化，显示进度
              isControlShow: true, //控制控件是否显示
              currentTime: '00:00',  //当前时间
              durationTime: '00:00',  //总时间
              posCurrent: 0,   //当前进度
              posBuffered: 0,  //缓冲进度
              controlShowTimer: null    //3秒后自动关闭控制控件显示定时器
            });
          });
        }
        console.log(this.video);
      },
      reload() {
        let video = this.$refs.video;
        if (video !== undefined) {
          console.log('重新加载了');
          for (let i = 0, len = video.length; i < len; i++) {
            video[i].load();
          }
        }
      },
      play(index) {
        console.log(index);
        // 不在播放
        if (this.video[index].isPlay === false) {
          this.video[index].isPlay = true;    // 图标变化
          if (this.video[index].isPlayShow === false) { // 控件没有显示，初始的
            this.video[index].isPlayShow = true;
            setTimeout(() => {
              this.initVideo(index);
            }, 0);
          } else {  // 控件已经显示，播放暂停的情况

            this.$video.play();
            this.video[index].isControlShow = false;
          }
        } else {
          // 在播放
          clearTimeout(this.video[index].controlShowTimer);
          this.video[index].isControlShow = true;
          this.$refs.video[index].pause();
          this.video[index].isPlay = false;
          this.video[index].isPlayShow = false;
        }
      },
      initVideo(index) {  // 开始播放载入
        this.$video = this.$refs.video[index];
        this.$video.play();               // 播放
        this.video[index].loading = true;              // 加载显示
        // 当视频的元数据(时长、尺寸)已加载时
        this.$video.addEventListener('loadedmetadata', () => {
          console.log('元数据已加载事件');
          this.video[index].durationTime = this.timeParse(this.$video.duration);  // 总时间
          this.video[index].currentTime = this.timeParse(this.$video.currentTime); // 当前时间
        });
        // 当浏览器能够开始播放视频时
        this.$video.addEventListener('canplay', () => {
          console.log('视频可以播放事件');
          this.video[index].isControlShow = false;     // 控制条+播放暂停按钮隐藏
          this.video[index].loading = false;           // 加载隐藏
        });
        // 当目前的播放位置已更改时
        this.$video.addEventListener('timeupdate', () => {
          console.log('播放位置更改了事件');
          // 获取当前播放时间
          this.video[index].currentTime = this.timeParse(this.$video.currentTime);  // 当前时间
          // 修正视频当前播放进度
          this.video[index].posCurrent = (this.$video.currentTime / this.$video.duration).toFixed(6) * 100;
          // 修正视频缓冲进度
          if (this.$video.buffered.length > 0) {
            // console.log(this.$video.buffered);
            this.video[index].posBuffered = (this.$video.buffered.end(0) / this.$video.duration).toFixed(6) * 100;
          }
        });
        this.$video.addEventListener('canplaythrough', () => {
          console.log('缓存到尾可以播放');
        });
        // 当视频由于需要缓冲下一帧而停止
        this.$video.addEventListener('waiting', () => {
          console.log('需要缓冲而暂停事件');
          this.video[index].isControlShow = true;
          this.video[index].loading = true;
        });
        // 当视频已暂停时
        this.$video.addEventListener('pause', () => {
          console.log('视频暂停事件');
          this.video[index].isControlShow = true;
          this.video[index].isPlay = false;
        });
        // 当视频已开始或不再暂停时
        this.$video.addEventListener('play', () => {
          console.log('视频开始事件');
          this.video[index].loading = false;
          this.video[index].isControlShow = false;
          this.video[index].isPlay = true;
          this.video[index].durationTime = this.timeParse(this.$video.duration);  // 总时间
        });
        // 当目前的播放列表已结束时
        this.$video.addEventListener('ended', () => {
          console.log('视频结束事件');
          this.video[index].isControlShow = true;
          this.video[index].isPlay = false;
        });
        this.$video.addEventListener('abort',() => {
          console.log('放弃缓冲');
        });
        this.$video.addEventListener('emptied',(e) => {
          console.log('列表空',e);
        });
        this.$video.addEventListener('stalled',(e) => {
          console.log('数据不可用',e);
        });
        this.$video.addEventListener('suspend',(e) => {
          console.log('刻意不获取',e);
        });
        this.$video.addEventListener('error',(e) => {
          console.log('错误事件',e.target.error);
        });
        this.pressMove(index);
      },
      // 拖动更改视频进度
      pressMove(index) {
        let $drager = this.$refs.drager[index];
        let $progress = this.$refs.progress[index];
        $drager.addEventListener('touchstart', (e) => { // 监听红点触摸事件
          clearTimeout(this.video[index].controlShowTimer); // 暂停3S后隐藏控制控件
        });
        $drager.addEventListener('touchmove', (e) => { // 监听红点移动事件
          this.$video.pause(); // 暂停播放

          // console.log(e.targetTouches[0].clientX);  // 基于初始位置的X位移值
          if (e.targetTouches[0].clientX < 0) {   // 拉到左边之前
            this.video[index].posCurrent = 0;
          } else if (e.targetTouches[0].clientX > $progress.offsetWidth) {
            this.video[index].posCurrent = '100';          // 拉到右边之后
          } else {
            let dragerTime = (e.targetTouches[0].clientX / $progress.offsetWidth).toFixed(4);
            this.video[index].posCurrent = dragerTime * 100;   // 当前位置/总位置*100 = 红色条的长度
            this.video[index].currentTime = this.timeParse(dragerTime * this.$video.duration);
            // 当前位置/总位置*总时间 = 当前时间
          }
        });
        $drager.addEventListener('touchend', (e) => { // 监听触摸事件完毕
          let dragerTime = (e.changedTouches[0].clientX / $progress.offsetWidth).toFixed(4) * this.$video.duration;
          this.video[index].currentTime = this.timeParse(dragerTime);  // 当前位置/总位置*总时间 = 当前时间
          console.log(this.$video);
          this.$video.currentTime = dragerTime.toFixed(0);  // 改变播放器的进度！！！！！！
          this.play(index); // 开始播放 之后被监听到位置更改
        });
      },
      // 整个播放框点击
      showControls(index) {
        clearTimeout(this.video[index].controlShowTimer);
        // 播放中且不是加载中
        console.log(this.video[index].loading);
        if (this.video[index].isPlay === true && !this.video[index].loading) {
          if (this.video[index].isControlShow === false) {  // 控制控件显示，3秒后隐藏
            this.video[index].isControlShow = true;
            this.video[index].controlShowTimer = setTimeout(() => {
              this.video[index].isControlShow = false;
            }, 3000);
          } else {   // 控制控件隐藏
            this.video[index].isControlShow = false;
          }
        }
      },
      setFullScreen(index) {
        if (this.$video.requestFullscreen) {
          this.$video.requestFullscreen();
        } else if (this.$video.mozRequestFullScreen) {
          this.$video.mozRequestFullScreen();
        } else if (this.$video.webkitRequestFullscreen) {
          this.$video.webkitRequestFullscreen();
        }
      },
      pad(val) {
        val = Math.floor(val);
        if (val < 10) {
          return '0' + val;
        }
        return val + '';
      },
      timeParse(sec) { // 秒转分秒
        let min;
        min = Math.floor(sec / 60);
        sec = sec - min * 60;
        return this.pad(min) + ':' + this.pad(sec);
      },
    },
    watch: {

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/mixin';
  .video-list {
    width: 100%;
    position: relative;
    .content {
      @include wh(100%, 4.225rem);
    }
    .video-control {
      @include center();
      top: 40%;
      img {
        @include wh(0.8rem, 0.8rem);
      }
    }
    .loading {
      position: absolute;
      left: 45%;
      top: 0;
    }
    .content-control {
      position: absolute;
      bottom: 21%;
      left: 0;
      @include fj();
      width: 100%;
      align-items: center;
      .time-display {
        padding-left: 0.2rem;
      }
      .fullScreen-btn {
        padding: 0 0.2rem;
        img {
          @include wh(0.5rem, 0.5rem);
        }
      }
      .display-time {
        color: #fff;
        span {}
      }
    }

    .video-progress {
      position: absolute;
      left: 0;
      bottom: 0.92rem;
      @include wh(100%, 0.13rem);
      .video-buffered-progress {
        position: absolute;
        left: 0;
        background-color: $gray;
        height: 0.13rem;
      }
      .video-current-progress {
        position: absolute;
        left: 0;
        background-color: $red;
        height: 0.13rem;
      }
      .dot {
        position: absolute;
        left: 0;
        top: 50%;
        width: 0.3rem;
        height: 0.3rem;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: $red;
      }
    }

    .info {
      @include wh(100%, 0.8rem);
      padding-top: 0.1rem;
      display: flex;
      .title {
        /* @include wh(60%, 100%); */
        width: 60%;
        padding: 0.05rem;
      }
      .title{
        /* word-break: break-all; */
        font-size: $f30;
      }
      .support,
      .talk,
      .share {
        flex: 1;
        height: 100%;
      }
      .support,.talk,.share{
        @include fj(center);
        flex-flow: column;
        align-items: center;
        .icon {
          @include wh(0.4rem,0.4rem);
        }
        p {
          color: $fontGray;
        }
      }
    }
  }
</style>
