<template>
  <div class="ProductList">
    <div class="w3-row-padding w3-center products" style="margin-top: 64px">
      <div v-for="product in products" :key="product.id" class="w3-quarter w3-margin-bottom product">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
          <img :alt="product.name" :src="product.image" class="image" style="width: 100%"/>
        </router-link>
        <p class="w3-large w3-margin-top w3-text-orange name">{{ product.name }}</p>
        <p class="w3-large w3-margin-top price">${{ product.price }}</p>
        <p class="w3-margin-top w3-margin-bottom description">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: {
      type: Array,
    },
  },
};
</script>
