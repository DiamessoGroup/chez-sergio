<template>
  <div class="home">
    <Banner/>
    <AboutUs/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";

export default {
  name: "Home",
  components: {
    Banner,
    AboutUs,
  },
};
</script>
