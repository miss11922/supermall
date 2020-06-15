<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
  },
  data(){
      return {
        //   isActive: false
      }
  },
  computed: {
      isActive(){
          return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
        return this.isActive?{color: this.activeColor} : {}
      }
  },
  methods: {
      itemClick(){
          this.$router.replace(this.path)
      }
  },
}
</script>

<style>
  .tabbar-item{
    font-size: 0.24rem;
    flex: 1;
    color: gray;
  }
  .tabbar-item img{
    width: .48rem;
    height: .48rem;
  }
  .active{
      color: red;
  }
</style>
