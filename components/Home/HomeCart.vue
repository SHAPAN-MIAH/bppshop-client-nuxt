<template>
  <div class="container">
    <div class="cart-container">
      <li class="cart" v-for="item in category" :key="item.id">
        <nuxt-link :to="'/' + item.route">
          <p v-if="item.status == 'Upcoming'">{{ item.status }}</p>
          <img :src="item.img" alt="">
          <h3>{{ item.name }}</h3>
        </nuxt-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCart",
  created() {
    this.$emit("home-category", this.category);
  },

  data() {
    return {
      category: [
        {
          id: 1,
          name: "Islamic Product",
          img: "img/categoryImg/islamic_product.webp",
          status: "",
          route: "islamic",
        },
        {
          id: 2,
          name: "Grocery",
          img: "img/categoryImg/grocery.webp",
          status: "",
          route: "grocery",
        },
        {
          id: 3,
          name: "Fashion",
          img: "img/categoryImg/fashion.webp",
          status: "",
          route: "fashion",
        },
        {
          id: 4,
          name: "Electronics",
          img: "img/categoryImg/electronics.webp",
          status: "Upcoming",
          route: "electronics",
        },
        {
          id: 5,
          name: "Baby Care",
          img: "img/categoryImg/baby_care.webp",
          status: "Upcoming",
          route: "babyCare",
        },
        {
          id: 6,
          name: "Cosmetics",
          img: "img/categoryImg/cosmetic.webp",
          status: "Upcoming",
          route: "cosmetics",
        },
        {
          id: 7,
          name: "Furniture",
          img: "img/categoryImg/furniture.webp",
          status: "Upcoming",
          route: "furniture",
        },
        {
          id: 8,
          name: "Shoes",
          img: "img/categoryImg/shoe.webp",
          status: "Upcoming",
          route: "shoes",
        },
      ],
    };
  },
};
</script>

<style src="~/assets/css/homeCart.css" scoped>

</style>
