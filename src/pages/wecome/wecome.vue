<template>
  <div class="wecome">
    <p class="advert">广告位</p>
    <p class="second">{{second}}</p>
  </div>
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
        second: 3,
      }
    },
    created() {
      //数据预处理
    },
    mounted() {
      setInterval(() => {
        --this.second;
        if(this.second == 0){
          this.$router.push('/home')
        }
      }, 1000);
      
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
  .wecome{
    @include allcover;
    background-color: $red;
    .advert,.second{
      @include sc(1rem,#fff);
      text-align: center;
    }
    .advert{
      margin-top: 3.5rem;
      margin-bottom: 0rem;
    }
    .second{
      margin-top: 0.3rem;
    }
  }

</style>
