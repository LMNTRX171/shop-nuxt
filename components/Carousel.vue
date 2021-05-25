<template>
  <v-carousel 
    cycle
    hide-delimiters
    show-arrows-on-hover
    height="620"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1501001637262-1dc0c2c3e5d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1557180999-e2d5a8982c27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1594252475334-bba89a94974f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1613941759550-79232ac951fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1377&q=80',
          },
        ],
      }
    },
  }
</script>