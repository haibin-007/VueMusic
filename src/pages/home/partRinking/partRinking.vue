<template>
    <transition name="fade">
      <div class="ranking-area">
        <div class="title">官方榜</div>
        <div class="ranking-official-area">
            <div class="surge">
                <img src="./surge.jpg" alt="surge">
                <!-- <v-songs-list :data="surgeList"></v-songs-list> -->
            </div>
            <div class="newSonges">
                <img src="./newSonges.jpg" alt="newSonges">
                <!-- <v-songs-list :data="newSongesList"></v-songs-list> -->
            </div>
            <div class="original">
                <img src="./original.jpg" alt="original">
                <!-- <v-songs-list :data="originalList"></v-songs-list> -->
            </div>
            <div class="hot">
                <img src="./hot.jpg" alt="hot">
                <!-- <v-songs-list :data="hotList"></v-songs-list> -->
            </div>
        </div>
        <div class="title">全球榜</div>
        <div class="ranking-world-area">
          <ul>
            <li v-for="(item, index) in rankingList" :key="index">
              <img :src="item.coverImageUrl" alt="item.title">
              <p class="ranking-title">{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </template>
  <script>
    // wRL为全球榜单
    import wRL from './wRL.json';
    export default {
      name: 'v-ranking',
      data () {
        return {
          surgeList: [],
          newSongesList: [],
          originalList: [],
          hotList: [],
          surgeInfo: {},
          newSongesInfo: {},
          originalInfo: {},
          hotInfo: {},
          rankingList: wRL.rankingList
        };
      },
      mounted: function() {
      },
      methods: {
      },
      components: {
      }
    };
  </script>
  <style lang="scss" scoped>
  .ranking-area{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .title{
      padding-top: 15px;
      font-size: 14px;
      color: #282c2b;
      &:before{
        content: '|';
        color: #ce3d3e;
        font-size: 20px;
        font-weight: 600;
        padding-right: 5px;
      }
    }
    .ranking-official-area{
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      > div{
        /* display: flex; */
        flex-direction: row;
        padding: 2px 0;
        img{
          flex: 1 0 33%;
          width: 130px;
          height: 130px;
        }
      }
    }
    .ranking-world-area{
      ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-flow: row wrap;
        list-style: none;
        li{
          padding-top: 10px;
          flex: 0 0 32%;
          width: 0;
          img{
            width: 100%;
          }
          p{
            font-size: 12px;
            color: #272d2b;
            padding-left: 5px;
            padding-right: 5px;
          } 
        }         
      }      
    }   
  }
  </style>
  