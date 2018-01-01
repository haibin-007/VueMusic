<template>
  <div id="_page">
    <head-top></head-top>
  </div>
</template>
<script type="text/javascript">
  import headTop from '../../components/header/headTop';
  export default {
    components: {
      headTop
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
</style>
