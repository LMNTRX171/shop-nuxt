<template>
  <v-app id="inspire">
    <Navbar />
      <v-main>
          <nuxt />
      </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
  export default {
    components: {
      Navbar,
      Footer,
    }
  }
</script>

<style scoped>

</style>