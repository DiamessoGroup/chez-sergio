<template>
  <div class="Menu">
    <div class="w3-container menu-back-color" style="padding: 75px 16px">
      <!-- Nav tabs -->
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <span class="category-pill" @click="filterCategory('All')">All Items</span>
        </li>
        <li class="nav-item">
          <span class="category-pill" @click="filterCategory('Vegetarian')">Vegetarian</span>
        </li>
        <li class="nav-item">
          <span class="category-pill" @click="filterCategory('Meat')">Meat Extravaganza</span>
        </li>
        <li class="nav-item">
          <span class="category-pill" @click="filterCategory('Seafood')">Seafood</span>
        </li>
        <li class="nav-item">
          <span class="category-pill" @click="filterCategory('Spicy')">Spicy</span>
        </li>
      </ul>
      <transition mode="out-in" name="fade">
        <ProductList :key="filteredProducts[0].id" :products="filteredProducts"/>
      </transition>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList/ProductList";
import { mapState } from "vuex";
import store from "@/store"

export default {
  name: "Menu",
  components: { ProductList },
  data() {
    return {
      filteredProducts: this.$store.state.products
    }
  },
  store,
  computed: {
    ...mapState({
      products: "products",
    }),
  },
  methods: {
    filterCategory(category) {
      this.filteredProducts = this.products.filter(item => item.categories.includes(category))
    }
  },
};
</script>

<style lang="scss">
@import "Menu";
</style>
