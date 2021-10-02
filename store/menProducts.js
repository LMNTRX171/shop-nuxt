export const state = () => ({
    mensProducts: [],
})

export const mutations = {
    setProduct(state, mensProducts) {
      state.mensProducts = mensProducts
    },
}

export const actions = {
    async fetch({commit}) {
        const products = await this.$axios.$get("http://localhost:1337/mens")
        commit('setProduct', products)
    },
}

export const getters = {
    mensProducts: s => s.mensProducts,
}