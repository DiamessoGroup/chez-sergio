import Vue from "vue";
import Vuex from "vuex";
import data from "@/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: data.products,
    bestSellers: data.bestSellers,
    cartItems: data.cartItems,
  },
  mutations: {
    addToCartMutation(state, product) {
      product.quantity = 1;
      state.cartItems.push(product);
    },
    removeItemMutation(state, item) {
      const index = state.cartItems.indexOf(item);
      state.cartItems.splice(index, 1);
    },
    updateQuantityMutation(state, { item, value }) {
      const index = state.cartItems.indexOf(item);
      state.cartItems[index].quantity = Number(value);
    },
  },
  actions: {
    async addToCartAction({ commit }, payload) {
      commit("addToCartMutation", await payload);
    },
    async removeItemAction({ commit }, payload) {
      commit("removeItemMutation", await payload);
    },
    async updateQuantityAction({ commit }, item, value) {
      commit("updateQuantityMutation", await item, await value);
    },
  },
  getters: {
    isItemInCartGetter: (state) => (id) => {
      return state.cartItems.some((elem) => elem.id === id);
    },
    cartLengthGetter: (state) => {
      return state.cartItems.length;
    },
    totalBalanceGetter: (state) => {
      return state.cartItems.map((item) => item.price * item.quantity).reduce((prev, next) => prev + next, 0);
    },
    quantityInCartGetter: (state) => (product) => {
      if (state.cartItems.some((elem) => elem.name === product.name)) {
        const index = state.cartItems.findIndex((element) => element.name === product.name);
        return state.cartItems[index].quantity;
      } else {
        return 0;
      }
    },
  },
});
