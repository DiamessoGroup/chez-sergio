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
    addToCartMutation(state, payload) {
      state.cartItems.push(payload);
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
  },
});
