import axios from "axios";

export default {
  getPizzas() {
    return axios.get("/api/v1/pizzas");
  },
  getCartItems() {
    return axios.get("/api/v1/cart_items");
  },
  addItemToCart(pizzaId) {
    return axios.post("/api/v1/cart_items", { pizza_id: pizzaId });
  },
  deleteItemFromCart(id) {
    return axios.delete(`/api/v1/cart_items/${id}`);
  },
  UpdateItemQuantityInCart(id, newQuantity) {
    return axios.patch(`/api/v1/cart_items/${id}`, { quantity: newQuantity });
  },
};
