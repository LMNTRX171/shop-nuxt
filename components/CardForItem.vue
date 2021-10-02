<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="350"
      elevation="0"
    >
    <v-img
      class="white--text align-end"
      height="450px"
      :src="img"
    >
    </v-img>

    <v-card-title class="pb-0">
      {{title}}
    </v-card-title>
    
    <v-card-text class="text--primary">
      <div>{{categories}}</div>
      <div class="body-1">{{price}}$</div>
    </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'price', 'categories', 'img'],
}
</script>

<style  scoped>

</style>