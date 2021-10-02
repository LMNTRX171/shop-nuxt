<template>
  <div>    
    <Carousel />
    <IndexContent />
  <MainParallax />
  <ImageForId />
  </div>
</template>

<script>
import TabsForIndex from '../components/TabsForIndex.vue'
import CardForItem from '../components/CardForItem.vue'
import Carousel from '../components/Carousel.vue'
import MainParallax from '../components/MainParallax.vue'
import IndexContent from '../components/IndexContent.vue'
import ImageForId from '../components/ImageForId.vue'

  export default {
  components: { 
    TabsForIndex, 
    CardForItem,
    Carousel,
    MainParallax,
    IndexContent,
    ImageForId
  },
    data: () => ({

    }),
  }
</script>

<style scoped>
</style>