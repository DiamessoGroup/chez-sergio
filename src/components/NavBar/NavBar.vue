<template>
  <div class="NavBar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Chez Sergio</router-link>
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-route" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-route" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-route" to="/menu">Menu</router-link>
            </li>
          </ul>
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
