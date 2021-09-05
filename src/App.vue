<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export default {
  components: {Footer, NavBar},
  name: "App",
}

</script>

<style lang="scss">
html, body {
  font-family: 'Garamond', serif !important;
}

.color-accent {
  background-color: rgba(246, 186, 127, 0.94);
}
</style>
