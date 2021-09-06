<template>
  <div class="home">
    <Banner/>
    <AboutUs/>
    <Bestsellers/>
    <Reservation/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import Reservation from "@/components/Catering/Catering";
import Bestsellers from "@/components/BestSellers/BestSellers";

export default {
  name: "HomePage",
  components: {
    Bestsellers,
    Reservation,
    Banner,
    AboutUs,
  },
};
</script>
