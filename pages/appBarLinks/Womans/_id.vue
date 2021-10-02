<template>
    <div  class="mt-16">
    <v-container>
    <v-row>
        <v-col
            cols="12"
            sm="6"
        >
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
            <div class="float-none">
            <ImageForId
                :img = thisProduct.image[0].name
            />
            </div>
            </v-sheet>
        </v-col>

        <v-col
            cols="12"
            sm="3"
        >
        <v-sheet
            rounded="lg"
            min-height="268"
        >
            <h1 class="display-2 mb-8">{{thisProduct.title}}</h1>
            <h1 class="display-1 mb-8">{{thisProduct.categories[0].name}}</h1>
            <p class="subtitle-1 font-weight-medium">{{thisProduct.description}}</p>
            <h2>{{thisProduct.price}}$</h2>
            <v-btn
              color="black"
              x-large
              class="white--text mt-4"
              @click.prevent="addToCart(thisProduct)"
              >
                Add to card
            </v-btn>
        </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="3"
        >
          <v-sheet
            min-height="70vh"
            rounded="lg"
        >
        
            </v-sheet>
        </v-col>
    </v-row>
</v-container>
    </div>
</template>

<script>
import CardForItem from '../../../components/CardForItem.vue'
import ProductPage from  '../../../components/ProductPage.vue'
import ImageForId from  '../../../components/ImageForId.vue'
const axios = require('axios')

export default {
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },
    data: () => ({
        
    }),
    async asyncData({params}) {
        const response = await axios.get(`http://localhost:1337/womans/${params.id}`)
        const thisProduct = response.data
        console.log(thisProduct);
        return {thisProduct}
    },
    computed: {
        id() {
          return this.$route.params.id
        },
    },
    components: {
        CardForItem,
        ProductPage,
        ImageForId
    },
  methods: {
    addToCart(item) {
      this.$store.commit('cart/addToCartTest', item)
    }
  }
}
</script>