import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [],
    products: [],
    filteredProducts: [],
    bestSellers: [],
  },
  mutations: {
    addToCartMutation(state, payload) {
      state.cartItems = payload;
      // product.quantity = 1;
      // state.cartItems2.push(product);
    },
    removeItemMutation(state, payload) {
      state.cartItems = payload;
    },
    updateQuantityMutation(state, payload) {
      state.cartItems = payload;
      // const index = state.cartItems.indexOf(item);
      // state.cartItems[index].quantity = Number(value);
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
      state.cartItems = payload;
    },
  },
  actions: {
    async addToCartAction({ commit }, payload) {
      await api.addItemToCart(payload);
      const response = await api.getCartItems();
      commit("addToCartMutation", response.data);

      //commit("addToCartMutation", response.data);
      //commit("addToCartMutation", await payload);
    },
    async removeItemAction({ commit }, payload) {
      await api.deleteItemFromCart(payload.id);
      const response = await api.getCartItems();
      commit("removeItemMutation", response.data);
    },
    async updateQuantityAction({ commit }, { item, newQuantity }) {
      await api.UpdateItemQuantityInCart(item.id, newQuantity);
      const response = await api.getCartItems();
      commit("updateQuantityMutation", response.data);
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
      commit("getCartItemsMutation", response.data);
    },
  },
  getters: {
    isItemInCartGetter: (state) => (id) => {
      return state.cartItems.some((elem) => elem.pizza_id === id);
    },
    cartLengthGetter: (state) => {
      return state.cartItems.length;
    },
    totalBalanceGetter: (state) => {
      if (state.products.length > 0) {
        return state.cartItems
          .map((item) => state.products[item.pizza_id].price * item.quantity)
          .reduce((prev, next) => prev + next, 0);
      }
    },
    quantityInCartGetter: (state) => (pizza) => {
      if (state.cartItems.some((cartItem) => cartItem.pizza_id === pizza.id)) {
        const index = state.cartItems.findIndex((cartItem) => cartItem.pizza_id === pizza.id);
        return state.cartItems[index].quantity;
      } else {
        return 0;
      }
    },
    bestSellerGetter: (state) => {
      return state.bestSellers;
    },
    filteredProductsGetter: (state) => {
      return state.filteredProducts;
    },
  },
});
