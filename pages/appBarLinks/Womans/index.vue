<template>
  <div>
    <WomanIndex :womansProducts="womansProducts"/>
  </div>
</template>

<script>
import WomanIndex from '~/components/forWoman/WomanIndex'
export default {
    async fetch({store}) {
      if(store.getters['womanProducts/womansProducts'].length === 0) {
        await store.dispatch('womanProducts/fetch')
      }
    },
    methods: {
      openProduct(womansProduct) {
        this.$router.push(`/appBarLinks/Womans/${womansProduct.id}`)
      }
    },
    computed: {
      womansProducts() {
        return this.$store.getters['womanProducts/womansProducts']
      }
    },
    components: {
      WomanIndex
    }
};
</script>

<style scoped>
  a{
    text-decoration: none
  }
</style>