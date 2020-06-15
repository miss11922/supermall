<template>
  <div class="home-swiper">
    
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props: {
      swiperImgs: {
          type: Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style>
  .home-swiper{
      width: 100%;
      height: 4rem;
      background-color: #ddd;
  }
</style>
