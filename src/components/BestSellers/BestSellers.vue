<template>
  <div class="BestSellers">
    <div id="about" class="w3-container best-sellers-back-color" style="padding: 128px 16px">
      <h2 class="w3-center">Our Best Sellers</h2>
      <p class="w3-center w3-large">Your Favorite Pizza awaits you</p>
      <div class="w3-row-padding w3-center" style="margin-top: 64px">
        <div v-for="product in products" :key="product.id" class="w3-quarter w3-margin-bottom">
          <img :src="product.image" alt="John" style="width: 100%"/>
          <p class="w3-large w3-margin-top w3-text-orange">{{ product.name }}</p>
          <p class="w3-large w3-margin-top">${{ product.price }}</p>
          <p class="w3-margin-top w3-margin-bottom">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "@/data";

export default {
  name: "Bestsellers",
  data() {
    return {
      products,
    };
  },
};
</script>

<style lang="scss">
@import "BestSellers";
</style>
