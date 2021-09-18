<template>
  <div class="Cart">
    <div class="container">
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
          <div class="col-md-9">
            <div class="ibox">
              <div class="ibox-title">
                <span class="pull-right"
                >(<strong>{{ cartLength }}</strong
                >) items</span
                >
                <h5>Items in your cart</h5>
              </div>
              <div v-for="(item, index) in cartItems" :key="index" class="ibox-content">
                <div class="table-responsive">
                  <table class="table shopping-cart-table">
                    <tbody>
                    <tr>
                      <td width="90">
                        <img :alt="item.name" :src="item.image" style="height: 80px"/>
                      </td>
                      <td class="desc">
                        <h3>
                          <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }" class="product-link">
                            {{ item.name }}
                          </router-link>
                        </h3>
                        <p class="small d-none d-sm-block">
                          {{ item.description }}
                        </p>

                        <div class="m-t-sm">
                          <a class="text-muted removeItem" @click="removeItem(item)"
                          ><i class="fa fa-trash"></i>Remove item</a
                          >
                        </div>
                      </td>

                      <td>${{ item.price }}</td>
                      <td width="65">
                        <select v-model="item.quantity" class="form-select me-3" style="width: 5rem">
                          <option selected value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                      <td>
                        <h4>${{ item.quantity * item.price }}</h4>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="ibox-content">
                <button class="btn btn-primary pull-right"><i class="fa fa fa-shopping-cart"></i> Checkout</button>
                <button class="btn btn-white"><i class="fa fa-arrow-left"></i> Continue shopping</button>
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
                <div class="m-t-sm">
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
      return this.cartItems.map((item) => item.price * item.quantity).reduce((prev, next) => prev + next);
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
