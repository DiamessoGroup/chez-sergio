<template>
  <div class="NavBar">
    <nav class="p-3 bg-dark text-white">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <router-link class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" to="/">
            <img alt="" height="32" src="chez-sergio-logo-3.png" width="40"/>
          </router-link>
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li class="nav-link px-2 text-secondary">
              <router-link class="link" exact-active-class="active-route" to="/">Home</router-link>
            </li>

            <li class="nav-link px-2 text-white">
              <router-link class="link" exact-active-class="active-route" to="/about">About</router-link>
            </li>

            <li class="nav-link px-2 text-white">
              <router-link class="link" exact-active-class="active-route" to="/menu">Menu</router-link>
            </li>
          </ul>

          <div class="text-end">
            <router-link to="/cart">
              <button class="btn btn-warning" type="button">Cart</button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "NavBar",
  router: router,
};
</script>

<style lang="scss">
@import "NavBar";
</style>
