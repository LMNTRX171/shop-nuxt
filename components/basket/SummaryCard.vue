<template>
 <div>
  <v-card
    max-width="400"
  >
    <v-card-title>
      <p class="text-h4 text--primary">
        Summary
      </p>
    </v-card-title>
    <v-card-text>
      <v-row
        style="height: 60px"
      >
      <v-col
        cols="12"
        sm="8"
      >
        <div class="title black--text">
          <p>Subtotal</p>
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
          <div class="float-right">
            ${{totalPrice}}
          </div>
      </v-col>
      </v-row>

      <v-row
        style="height: 80px"
      >
      <v-col
        cols="12"
        sm="8"
      >
        <div class="title black--text">
          <p>Estimated Shipping & Handling</p>
        </div>
      </v-col>
      
      <v-col
        cols="12"
        sm="4"
      >
        <div class="float-right">
          $0.00
        </div>
      </v-col>
      </v-row>
    </v-card-text>
<v-divider></v-divider>
    <v-card-text>
      <v-row>
      <v-col 
        cols="12"
        sm="8"
      >
          <div class="text-h6 text--primary">
            Total
          </div>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <div class="float-right">
          ${{totalPrice}}
        </div>
      </v-col>
      </v-row>
    </v-card-text>
<v-divider></v-divider>
    <v-card-actions>
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="350"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black"
          dark
          x-large
          rounded
          block
          class="white--text mt-4"
          v-bind="attrs"
          v-on="on"
        >
          Checkout
        </v-btn>
      </template>
      <v-card>
        <div v-if="cartProducts.length == 0">
          <v-card-title class="text-subtitle1">
            No item in cart
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Okey
            </v-btn>
          </v-card-actions>
        </div>
        <div v-else>
          <v-card-title class="text-subtitle1">
            Your order has been processed!
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Okey
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
    </v-card-actions>
  </v-card>
 </div>
</template>

<script>
export default {
  props: ['totalPrice'],
  data: () => ({
    dialog: false
  }),
  computed: {
      cartProducts() {
      return this.$store.getters['cart/cart']
    },
  }
}
</script>