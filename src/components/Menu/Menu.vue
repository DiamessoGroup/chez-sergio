<template>
  <div class="Menu">
    <!-- Nav tabs -->
    <ul class="nav tabs-menu-nav justify-content-center mb30" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          aria-controls="breakfast"
          aria-selected="true"
          class="nav-link active show"
          data-toggle="tab"
          href="#breakfast"
          role="tab"
        >Breakfast</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a aria-controls="lunch" aria-selected="false" class="nav-link" data-toggle="tab" href="#lunch" role="tab">
          Lunch</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a aria-controls="dinner" aria-selected="false" class="nav-link" data-toggle="tab" href="#dinner" role="tab"
        >Dinner</a
        >
      </li>
    </ul>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a aria-current="page" class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <ProductList :products="products"/>
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
