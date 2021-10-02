export const state = () => ({
    womansProducts: []
})

export const mutations = {
    setProduct(state, womansProducts) {
        state.womansProducts = womansProducts
    },

}

export const actions = {
    async fetch({commit}) {
        const products = await this.$axios.$get("http://localhost:1337/womans")
        commit('setProduct', products)
    },
}

export const getters = {
    womansProducts: s => s.womansProducts,
}