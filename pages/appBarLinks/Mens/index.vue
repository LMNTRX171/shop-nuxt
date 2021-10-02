<template>
  <div>
    <MenIndex :mensProducts="mensProducts"/>
  </div>
</template>

<script>
import MenIndex from '~/components/forMens/MenIndex'
export default {
  data: () => ({
    categoryName: [],
    error: null,
  }),
  components: {MenIndex},
  async fetch({store}) {
    if(store.getters['menProducts/mensProducts'].length === 0) {
      await store.dispatch('menProducts/fetch')
    }
  },
  computed: {
    mensProducts() {
      return this.$store.getters['menProducts/mensProducts']
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none
  }
</style>