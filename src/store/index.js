import Vue from "vue";
import Vuex from "vuex";
import data from "@/data";
import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: data.cartItems,
    products: [],
    filteredProducts: [],
    bestSellers: [],
    cartItems2: [],
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
    getPizzasMutation(state, payload) {
      state.products = payload;
      state.filteredProducts = payload;
    },
    filterCategoryMutation(state, category) {
      state.filteredProducts = state.products.filter((item) => item.categories.includes(category));
    },
    bestSellerMutation(state) {
      state.bestSellers = state.products.filter((item) => item.best_seller === true);
    },
    getCartItemsMutation(state, payload) {
      state.cartItems2 = payload;
    },
  },
  actions: {
    addToCartAction({}, payload) {
      api.addItemToCart(payload);
      //commit("addToCartMutation", await payload);
    },
    async removeItemAction({ commit }, payload) {
      commit("removeItemMutation", await payload);
    },
    async updateQuantityAction({ commit }, item, value) {
      commit("updateQuantityMutation", await item, await value);
    },
    async getPizzasAction({ commit }) {
      const response = await api.getPizzas();
      commit("getPizzasMutation", response.data);
    },
    async filterCategoryAction({ commit }, category) {
      commit("filterCategoryMutation", category);
    },
    bestSellerAction({ commit }) {
      commit("bestSellerMutation");
    },
    async getCartItemsAction({ commit }) {
      const response = await api.getCartItems();
      commit("getCartItemsMutation", response);
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
