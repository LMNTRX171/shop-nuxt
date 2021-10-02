<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="450"
      elevation="0"
    >
      <v-img 
        class ="align-end"
        :src="img"
      >
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['img']
}
</script>