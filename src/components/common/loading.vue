<template>
  <div class="pacman">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
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
.pacman {
  position: relative;
  transform: scale(1);
}
.pacman > div:nth-child(2) {
  -webkit-animation: pacman-balls 1s -0.99s infinite linear;
  animation: pacman-balls 1s -0.99s infinite linear;
}
.pacman > div:nth-child(3) {
  -webkit-animation: pacman-balls 1s -0.66s infinite linear;
  animation: pacman-balls 1s -0.66s infinite linear;
}
.pacman > div:nth-child(4) {
  -webkit-animation: pacman-balls 1s -0.33s infinite linear;
  animation: pacman-balls 1s -0.33s infinite linear;
}
.pacman > div:nth-child(5) {
  -webkit-animation: pacman-balls 1s 0s infinite linear;
  animation: pacman-balls 1s 0s infinite linear;
}
.pacman > div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 15px solid transparent;
  border-top: 15px solid #D43B33;
  border-left: 15px solid #D43B33;
  border-bottom: 15px solid #D43B33;
  border-radius: 15px;
  -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
  animation: rotate_pacman_half_up 0.5s 0s infinite;
  position: relative;
  left: -30px;
}
.pacman > div:nth-child(2) {
  width: 0px;
  height: 0px;
  border-right: 15px solid transparent;
  border-top: 15px solid #D43B33;
  border-left: 15px solid #D43B33;
  border-bottom: 15px solid #D43B33;
  border-radius: 15px;
  -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
  animation: rotate_pacman_half_down 0.5s 0s infinite;
  margin-top: -30px;
  position: relative;
  left: -30px;
}
.pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
  background-color: #D43B33;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  width: 5px;
  height: 5px;
  position: absolute;
  -webkit-transform: translate(0, -6.25px);
  transform: translate(0, -6.25px);
  top: 18px;
  left: 55px;
}

@-webkit-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@-webkit-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}

@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-70px, -6.25px);
  }
}
</style>
