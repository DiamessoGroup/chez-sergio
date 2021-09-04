<template>
  <div class="home">
    <Banner/>
    <AboutChezSergio/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutChezSergio from "@/components/AboutChezSergio/AboutChezSergio";
import Banner from "@/components/Banner/Banner";

export default {
  name: "Home",
  components: {
    Banner,
    AboutChezSergio,
  },
};
</script>
