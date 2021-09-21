<template>
  <div class="Menu">
    <div class="w3-container menu-back-color" style="padding: 75px 16px">
      <!-- Nav tabs -->
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <span class="category-pill">All Items</span>
        </li>
        <li class="nav-item">
          <span class="category-pill">Vegetarian</span>
        </li>
        <li class="nav-item">
          <span class="category-pill">Meat Extravaganza</span>
        </li>
        <li class="nav-item">
          <span class="category-pill">Seafood</span>
        </li>
        <li class="nav-item">
          <span class="category-pill">Spicy</span>
        </li>
      </ul>
      <ProductList :products="products"/>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList/ProductList";
import { mapState } from "vuex";

export default {
  name: "Menu",
  components: { ProductList },
  computed: {
    ...mapState({
      products: "products",
    }),
  },
};
</script>

<style lang="scss">
@import "Menu";
</style>
