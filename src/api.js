import axios from "axios";

export default {
  getPizzas() {
    return axios.get("/api/v1/pizzas");
  },
  getCartItems() {
    return axios.get("/api/v1/cart_items");
  },
  addItemToCart(cartItem) {
    return axios.post("/api/v1/cart_items", cartItem);
  },
};
