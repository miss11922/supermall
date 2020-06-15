<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :swiper-imgs="swiperImgs"></home-swiper>

    <con-tab-bar :tab-bar-text="homeConTabText" @conTabClick="conTabClick"></con-tab-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import ConTabBar from 'components/content/conTabbar/ConTabbar'

import HomeSwiper from './child/HomeSwiper'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'

export default {
  name: 'Home',
  data(){
    return {
      homeConTabText: [{type: 'pop',chinese:'流行'},{type: 'news',chinese:'新款'},{type: 'sell',chinese:'精选'}],
      swiperImgs: [],
      conTabbarDetail: {
        pop: {page: 0, list: []},
        news: {page: 0, list: []},
        sell: {page: 0, list: []},
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    ConTabBar
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res)
    })

    this.getGoods('pop')
    this.getGoods('news')
    this.getGoods('sell')
    
  },
  methods: {
    conTabClick(type){
      console.log(type)
    },
    // 网络请求
    getGoods(type){
      getHomeGoods(type).then(res => {
      console.log(res)
    })
    }
  },
}
</script>

<style>
  .home-nav{
    background-color: var(--color-navTabBgc);
    color: #fff;
    font-size: .3rem;
  }
</style>
