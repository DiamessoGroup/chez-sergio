<template>
  <div class="ProductItem">
    <p>I am product item {{ this.$route.params }}</p>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'ProductItem',
  router: router,
};
</script>
