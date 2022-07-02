<template>
  <div class="div">
    <Home />
  </div>
</template>

<script>
import Home from "~/components/Home/Home.vue";
import HomeCart from "@/components/Home/HomeCart.vue";

export default {
  name: "IndexPage",
  components: { Home, HomeCart },
};
</script>
