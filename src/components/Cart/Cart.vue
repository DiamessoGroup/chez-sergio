<template>
  <div class="Cart">
    <div class="container">
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
          <div v-if="cartLength === 0" class="col-md-9 mb-3">
            <h5>Your cart is currently empty.</h5>
          </div>
          <div class="col-md-9">
            <div class="ibox">
              <div class="ibox-title">
                <span class="pull-right">(<strong>{{ cartLength }}</strong>) items</span>
                <h5>Items in your cart</h5>
              </div>
              <div v-for="(item, index) in cartItems" :key="index" class="ibox-content">
                <div>
                  <div>
                    <div>
                      <div class="row">
                        <div class="col-md-5 col-lg-3 col-xl-3">
                          <img :alt="item.name" :src="item.image" class="img-fluid mb-2"/>
                        </div>
                        <div class="col-md-7 col-lg-9 col-xl-9">
                          <div>
                            <div class="d-flex justify-content-between">
                              <div>
                                <h3>
                                  <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }"
                                               class="product-link">
                                    {{ item.name }}
                                  </router-link>
                                </h3>
                                <p class="small">
                                  {{ item.description }}
                                </p>
                                <p class="mb-3 text-muted text-uppercase small">Unit Price: ${{ item.price }}</p></div>
                              <div>
                                <div class="def-number-input number-input safari_only mb-0 w-100">
                                  <select v-model="item.quantity" class="form-select me-3">
                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="m-t-sm col-sm-1">
                                <a class="btn btn-outline-danger removeItem" @click="removeItem(item)"
                                ><i class="fa fa-trash"></i></a>
                              </div>
                              <h4 class="mb-0"><span><strong>${{ item.quantity * item.price }}</strong></span></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ibox-content">
                <router-link :to="{ name: 'Menu'}">
                  <button class="btn btn-white pull-left d-none d-sm-block"><i class="fa fa-arrow-left"></i> Continue
                    shopping
                  </button>
                </router-link>
                <button v-if="cartLength !== 0" class="btn btn-primary pull-right"><i
                  class="fa fa fa-shopping-cart"></i> Checkout
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="ibox">
              <div class="ibox-title">
                <h5>Cart Summary</h5>
              </div>
              <div class="ibox-content">
                <span> Total </span>
                <h2 class="font-bold">${{ totalBalance }}</h2>
                <hr/>
                <div v-if="cartLength !== 0" class="m-t-sm">
                  <div class="btn-group">
                    <a class="btn btn-primary btn-sm" href="#"><i class="fa fa-shopping-cart"></i> Checkout</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="ibox">
              <div class="ibox-title">
                <h5>Support</h5>
              </div>
              <div class="ibox-content text-center">
                <h5><i class="fa fa-phone"></i> +1.409.553.2323</h5>
                <span class="small"> Please contact us for any questions you may have.</span>
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
  name: "Cart",
  router: router,
  data() {
    return {
      cartItems: data.cartItems,
    };
  },
  computed: {
    cartLength() {
      return this.cartItems.length;
    },
    totalBalance() {
      return this.cartItems.map((item) => item.price * item.quantity).reduce((prev, next) => prev + next, 0);
    },
  },
  methods: {
    removeItem(item) {
      const index = this.cartItems.indexOf(item);
      this.cartItems.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
@import "Cart";
</style>
