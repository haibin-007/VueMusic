<template>
  <footer class='foot_guide zx10'>
    <div :class="optionNum == 'find'?'find on':'find'">
      <svg :class="optionNum == 'find'?'icon on':'icon'" aria-hidden="true">
        <use xlink:href="#icon-wangyiyunyinlezizhi-copy"></use>
      </svg>
      <p>发现音乐</p>
    </div>
    <div :class="optionNum == 'my'?'my on':'my'">
      <svg :class="optionNum == 'my'?'icon on':'icon'" aria-hidden="true">
        <use xlink:href="#icon-yinyue"></use>
      </svg>
      <p>我的音乐</p>
    </div>
    <div :class="optionNum == 'friend'?'friend on':'friend'">
      <svg :class="optionNum == 'friend'?'icon on':'icon'" aria-hidden="true">
        <use xlink:href="#icon-pengyou"></use>
      </svg>
      <p>朋友</p>
    </div>
    <div :class="optionNum == 'account'?'account on':'account'">
      <svg :class="optionNum == 'account'?'icon on':'icon'" aria-hidden="true">
        <use xlink:href="#icon-zhanghao"></use>
      </svg>
      <p>账号</p>
    </div>
  </footer>
</template>
<script type="text/javascript">
  export default {
    components: {

    },
    props: ['optionNum'],
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
  .foot_guide {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    @include wh(100%, 1.2rem);
    background-color: rgb(35, 35, 30);
    align-items: center;
    .find,
    .my,
    .friend,
    .account {
      @include wh(25%, 100%);
      padding-top: 0.1rem;
      text-align: center;
      color: rgb(103,105,102);
      .icon{
        @include wh(0.7rem,0.7rem);
        color: rgb(103,105,102);  
      }
      .on{
        color: #fff;
      }
    }
    .on{
      color: #fff;
    }
  }
</style>
