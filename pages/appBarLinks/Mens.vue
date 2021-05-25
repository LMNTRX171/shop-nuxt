<template>
  <div>
        <!-- <v-container>
            <v-tabs centered color="black" v-model="tab">
                <v-tab>All Products</v-tab>
                <v-tab>Jackets and coat</v-tab>
                <v-tab>Polo and T-Shirt</v-tab>
                <v-tab>Hoodies and sweatshirts</v-tab>
                <v-tab>Pants and shorts</v-tab>
                <v-tab>Shoes</v-tab>
            </v-tabs>
        </v-container> -->

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
            v-for="mensProduct in mensProducts"
            :key="mensProduct.id"
            cols="12"
            sm="6"
            md="4"
          >
            <CardForItem 
              :title = mensProduct.title
              :description = mensProduct.description
              :price = mensProduct.price
              :categories = mensProduct.categories[0].name
            />
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
  </div>
</template>

<script>
import axios from "axios"
  export default {
    data: () => ({
      tab: null,
      categoryName: [],
      mensProducts: [],
      error: null,
    }),
    watch: {
      tab(val) {
        if(this.tab === 0) {
          this.allMensProducts()
        }else {
          this.showWEventByType(val)
        }
      }
    },
    methods: {
      async allMensProducts() {
        const response = await axios.get('http://localhost:1337/mens')
        this.mensProducts = response.data
      },
      showAllEvents() {
        console.log('all');
      },
      showWEventByType() {

      }
    },
    async mounted() {
      try {
        const response = await axios.get('http://localhost:1337/mens')
        this.mensProducts = response.data
      } catch (error) {
        this.error = error;
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>