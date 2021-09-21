<template>
  <div class="ProductList">
    <div class="w3-row-padding w3-center products" style="margin-top: 64px">
      <div v-for="product in products" :key="product.id" class="w3-quarter w3-margin-bottom product">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
          <img :alt="product.name" :src="product.image" class="image" style="width: 100%"/>
        </router-link>
        <p class="w3-large w3-margin-top w3-text-orange name">
          {{ product.name }}
          <span v-if="quantityInCartGetter(product) > 0" class="badge rounded-pill badge-product-list badge-add">{{
              quantityInCartGetter(product)
            }}</span>
        </p>
        <p class="w3-large w3-margin-top price">${{ product.price }}</p>
        <p class="w3-margin-top w3-margin-bottom description">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  props: {
    products: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters(["quantityInCartGetter"]),
  },
};
</script>

<style lang="scss">
@import "ProductList";
</style>
