<template>
  <div class="con-tabbar">
    <div class="con-tabbar-item" @click="conTabClick(index,item.type)" v-for="(item,index) in tabBarText" :key="index">
      <span :class="getCurrent(index)">{{item.chinese}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ConTabbar',
  props: {
      tabBarText: {
          type: Array,
          default(){
              return []
          }
      }
  },
  data(){
      return {
          currentIndex: 0
      }
  },
  computed: {
      
  },
  methods: {
      conTabClick(index,type){
          this.currentIndex = index;
          this.$emit('conTabClick',type)
      },
      getCurrent(index){
          return this.currentIndex == index ? 'active' : '';
      }
  },
}
</script>

<style scpoed>
  .con-tabbar{
      display: flex;
      justify-content: space-around;
      font-size: .28rem;
      padding: .2rem 0;
  }
  .con-tabbar span{
      padding-bottom: .08rem;
  }
  .active{
      color: #FF8E96;
      border-bottom: .04rem solid #FF8E96;
  }
</style>
