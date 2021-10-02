export const state = () => ({
  products: [],
  cart: [],
})

export const mutations = {
  REMOVE_Item(state, index) {
    state.cart.splice(index, 1);
  },
  addToCart(state, product) {
    let item = state.cart.find(i => i.count === product.count)
    if(item) {
      item.quantity++
    }else {
      state.cart.push({...product, quantity: 1})
    }
  },
}

export const actions = {
  addProduct({commit}, product) {
    commit('setCart', product)
  },
  tryAdd({commit}, payload) {
    commit('tryAdd', payload)
  },
  removeItem({commit}, index) {
    commit("REMOVE_Item", index);
  },
}

export const getters = {
  products: s => s.products,
  cart: s => s.cart,
  cartCount: s => s.cart.length,
}