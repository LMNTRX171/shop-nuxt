<template>
 <div>
  <v-card
    elevation="0"
    class="mb-10"
  >
    <div>
      <v-row>
      <v-col
        cols="12"
        sm="4"
      >
        <v-sheet
          min-height="150"
          rounded="lg"
        >
          <v-img
            aspect-ratio="1.3"
            :src="img"
            contain
            class="ml-0"
          >
          </v-img>
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-sheet
          min-height="150"
          rounded="lg"
        >
          <v-card-title>{{title}}</v-card-title>
          <v-card-text>
            <v-row>
            <div>
              {{description}}
            </div>
            <div class="mt-13 #9E9E9E--text mb-0">
              Quantity: {{quantity}}
            </div>
            <div class="mt-11">
              <v-btn 
                @click.prevent="removeItem(index)"
                plain
                >
                remove
              </v-btn>
            </div>
            </v-row>
          </v-card-text>
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="2"
      >
        <v-sheet
          rounded="lg"
          min-height="150"
        >
          <v-card-text>
            <div class="subtitle-1 float-right">
              {{price | fixPrice}}
            </div>
          </v-card-text>
        </v-sheet>
      </v-col>
      </v-row>
    </div>
  </v-card>
 </div>
</template>

<script>
export default {
  props: ['title', 'description', 'price', 'categories', 'img', 'quantity', 'index'],
  methods: {
    removeItem(index) {
      this.$store.dispatch("cart/removeItem", index);
    },
  },
  filters: {
    fixPrice(value) {
      return "$" + value.toFixed(2)
    }
  }
}
</script>
