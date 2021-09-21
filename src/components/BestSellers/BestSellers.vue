<template>
  <div class="BestSellers">
    <div id="about" class="w3-container menu-back-color" style="padding: 128px 16px">
      <h2 class="w3-center">Our Best Sellers</h2>
      <p class="w3-center w3-large">Your Favorite Pizza awaits you</p>
      <ProductList :products="bestSellers"/>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import store from "@/store";
import ProductList from "@/components/ProductList/ProductList";
import { mapState } from "vuex";

export default {
  name: "BestSellers",
  components: { ProductList },
  router,
  store,
  computed: {
    ...mapState({
      bestSellers: "bestSellers",
    }),
  },
};
</script>

<style lang="scss">
@import "BestSellers";
</style>
