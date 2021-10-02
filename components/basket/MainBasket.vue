<template>
  <div class="mt-14">
    <v-row>
    <v-col
      cols="12"
      sm="2"
    >
      <v-sheet
         min-height="70vh"
         rounded="lg"
      >
      </v-sheet>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-sheet
        min-height="70vh"
        rounded="lg"
      >
        <div>
          <p class="display-1">Basket</p>
        </div>
        <div v-if="cartProducts.length == 0">
          <EmptyMessage />
        </div>
        <div v-else>
          <div v-for="(cartProduct, index) in cartProducts" :key="cartProduct.text">
            <ItemCard
              :title = cartProduct.title
              :description = cartProduct.description
              :img = cartProduct.image[0].name
              :price = cartProduct.price
              :quantity = cartProduct.quantity
              :index = index
            />
          </div>
        </div>
      </v-sheet>
    </v-col>

    <v-col
      cols="12"
      sm="4"
    >
      <v-sheet
        rounded="lg"
        min-height="100"
      >
        <SummaryCard 
         :totalPrice="totalPrice"
        />
      </v-sheet>
    </v-col>
    </v-row>
  </div>
</template>


<script>
import SummaryCard from '~/components/basket/SummaryCard'
import ItemCard from '~/components/basket/ItemCard'
import EmptyMessage from '~/components/basket/EmptyMessage'

export default {
components: {
    SummaryCard,
    ItemCard,
    EmptyMessage
  },
computed: {
  cartProducts() {
      return this.$store.getters['cart/cart']
    },
    totalPrice() {
      let total = 0;
      for (let item of this.cartProducts) {
        total += item.price * item.quantity;
      }
      return total.toFixed(2);
    },
  },
}
</script>