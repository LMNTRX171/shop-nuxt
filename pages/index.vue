<template>
  <div>    
    <Carousel />
    <TabsForIndex />
    <v-container>     
      <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
                   <v-row>
        <v-col
          v-for="n in 6"
          :key="n"
          cols="12"
          sm="6"
          md="4"
        >
          <CardForItem />
        </v-col>
      </v-row>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            
            </v-sheet>
          </v-col>
        </v-row>
    </v-container>
  <MainParallax />
  </div>
</template>

<script>
import TabsForIndex from '../components/TabsForIndex.vue'
import CardForItem from '../components/CardForItem.vue'
import Carousel from '../components/Carousel.vue'
import MainParallax from '../components/MainParallax.vue'

  export default {
  components: { 
    TabsForIndex, 
    CardForItem,
    Carousel,
    MainParallax
  },
    data: () => ({

    }),
  }
</script>

<style scoped>
</style>