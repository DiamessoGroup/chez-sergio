<template>
  <div class="ProductItem">
    <div class="p-4 p-md-5 text-white bg-dark">
      <div class="col-md-6 px-0">
        <h2 class="display-2">{{ product.name }}</h2>
        <h3 class="display-4">$ {{ product.price }}</h3>
      </div>
    </div>
    <div class="bg-light rounded-3 px-4 py-3 mb-5">
      <div class="px-lg-3">
        <div class="row">
          <!-- Product gallery-->
          <div class="col-lg-7 pe-lg-0">
            <div class="">
              <div class="">
                <div id="first" class=""><img :alt="product.name" :src="product.image" class="img-fluid"/></div>
              </div>
            </div>
          </div>
          <!-- Product details-->
          <div class="col-lg-5 pt-4 pt-lg-0">
            <div class="product-details ms-auto pb-3">
              <div class="mb-3">
                <span class="h3 fw-normal text-accent me-1">{{ product.name }}</span>
              </div>
              <div class="mb-3">
                <span class="h3 fw-normal text-accent me-1">${{ product.price }}</span>
              </div>
              <div class="mb-3">
                <span class="h4 fw-normal text-accent me-1">{{ product.description }}</span>
              </div>
              <form class="mb-grid-gutter" method="post">
                <div class="mb-3 d-flex align-items-center">
                  <select class="form-select me-3" style="width: 5rem">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button class="btn btn-primary btn-shadow d-block w-100" type="submit">
                    <i class="ci-cart fs-lg me-2"></i>Add to Cart
                  </button>
                </div>
              </form>
              <!-- Product panels-->
              <div id="productPanels" class="accordion mb-4">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <a
                      aria-controls="productInfo"
                      aria-expanded="true"
                      class="accordion-button"
                      data-bs-toggle="collapse"
                      href="#productInfo"
                      role="button"
                    ><i class="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Product info</a
                    >
                  </h3>
                  <div id="productInfo" class="accordion-collapse collapse show" data-bs-parent="#productPanels">
                    <div class="accordion-body">
                      <h6 class="fs-sm mb-2">Nutritional Value per 100g</h6>
                      <ul class="fs-sm ps-4">
                        <li>Calories: 800 kcal</li>
                        <li>Carbohydrates: 20g</li>
                        <li>Fats: 20g</li>
                      </ul>
                      <h6 class="fs-sm mb-2">Art. No.</h6>
                      <ul class="fs-sm ps-4 mb-0">
                        <li>183260098</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data";
import router from "@/router";

export default {
  name: "ProductItem",
  router: router,
  data() {
    return {
      product: {},
    };
  },
  async created() {
    this.product = await data.products.find((element) => element.id === Number(this.$route.params.id));
    //console.log(this.product)
  },
};
</script>

<style lang="scss"></style>
