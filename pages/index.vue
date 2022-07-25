<template>
<!-- <no-ssr> -->
  <div class="div">
    <Home />
  </div>
  <!-- </no-ssr> -->
</template>

<script>
import Home from "~/components/Home/Home.vue";
import HomeCart from "@/components/Home/HomeCart.vue";

export default {
  name: "IndexPage",
  components: { Home, HomeCart },
};
</script>
