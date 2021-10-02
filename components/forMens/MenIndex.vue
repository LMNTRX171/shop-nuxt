<template>
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
          <a href="#" @click.prevent="openProduct(mensProduct)">
            <CardForItem
              :title = mensProduct.title
              :description = mensProduct.description
              :categories = mensProduct.categories[0].name
              :price = mensProduct.price
              :img= mensProduct.image[0].name
            />
          </a>
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
</template>

<script>
export default {
  props: ['mensProducts'],
  methods: {
    openProduct(mensProduct) {
      this.$router.push(`/appBarLinks/Mens/${mensProduct.id}`)
    }
  },
}
</script>

<style scoped>
  a{
    text-decoration: none
  }
</style>