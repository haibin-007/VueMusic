<template>
  <section class="video">
    <ul>
      <li class="video-list">
        <video class="content" width="100%" height="100%" preload="auto">
          <source src="/api/mv/url?url=http://v4.music.126.net/20180110030258/f132d87479769f2ce1fa17437f141726/web/cloudmusic/MSBkJDAgMCAwICAhICU0IA==/mv/5390067/f03ac5af529d5c096f5fd0f68a6abc7a.mp4"
            type='video/mp4' />
        </video>
        <div class="info">
          <div class="title">123</div>
          <div class="support">
            123
          </div>
          <div class="talk">123</div>
          <div class="share">123</div>
        </div>
      </li>




      <li class="video-list">
        <video class="content" width="100%" height="100%" preload="auto">
          <source src="/api/mv/url?url=http://v4.music.126.net/20180110030258/f132d87479769f2ce1fa17437f141726/web/cloudmusic/MSBkJDAgMCAwICAhICU0IA==/mv/5390067/f03ac5af529d5c096f5fd0f68a6abc7a.mp4"
            type='video/mp4' />
        </video>
        <div class="info">
          <div class="title">123</div>
          <div class="support">
            123
          </div>
          <div class="talk">123</div>
          <div class="share">123</div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script type="text/javascript">
  // import {} from './';
  export default {
    components: {

    },
    props: {
      // transition: {
      //   type: String,
      //   default: 'translate',
      // }
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
  @import '../../../style/mixin';
  .video-list {
    @include wh(100%, 5rem);
    .content {
      @include wh(100%, 4rem);
    }
    .info {
      @include wh(100%, 1rem);
      display: flex;
      .title {
        @include wh(60%, 100%);
      }
      .support,
      .talk,
      .share {
        flex: 1;
        height: 100%;
      }
    }
  }
</style>
