<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar{
      display: flex;
      height: .88rem;
      line-height: .88rem;
      text-align: center;
      box-shadow: 0 .02rem .02rem rgba(100, 100, 100, .1) ;
  }
  .nav-bar .left,.nav-bar .right{
      width: 1.2rem;
  }
  .nav-bar .center{
      flex: 1;
  }
</style>
