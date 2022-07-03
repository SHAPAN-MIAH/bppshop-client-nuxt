<template>
  <div class="container">
    <div class="cart-container">
      <li class="cart" v-for="item in category" :key="item.id">
        <p v-if="item.status == 'Upcoming'">{{ item.status }}</p>
        <img :src="item.img" alt="" />
        <h3>{{ item.name }}</h3>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCart",

  data() {
    return {
      category: [
        {
          id: 1,
          name: "Islamic Product",
          img: "img/categoryImg/islamic_product.webp",
          status: "",
        },
        {
          id: 2,
          name: "Grocery",
          img: "img/categoryImg/grocery.webp",
          status: "",
        },
        {
          id: 3,
          name: "Fashion",
          img: "img/categoryImg/fashion.webp",
          status: "",
        },
        {
          id: 4,
          name: "Electronics",
          img: "img/categoryImg/electronics.webp",
          status: "Upcoming",
        },
        {
          id: 5,
          name: "Baby Care",
          img: "img/categoryImg/baby_care.webp",
          status: "Upcoming",
        },
        {
          id: 6,
          name: "Cosmetics",
          img: "img/categoryImg/cosmetic.webp",
          status: "Upcoming",
        },
        {
          id: 7,
          name: "Furniture",
          img: "img/categoryImg/furniture.webp",
          status: "Upcoming",
        },
        {
          id: 8,
          name: "Shoes",
          img: "img/categoryImg/shoe.webp",
          status: "Upcoming",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}

.cart-container {
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
}

.cart {
  list-style: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 12px;
  padding: 30px 20px;
  border-radius: 5px;
  transition: all 0.5s;
}

.cart:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: translateY(-10px);
}

.cart p {
  font-family: "Rajdhani", sans-serif;
  float: right;
  background: green;
  color: #fff;
  padding: 5px 10px;
  border-radius: 30px;
}
.cart img {
  width: 100%;
}

.cart h3 {
  font-family: "Rajdhani", sans-serif;
  text-align: center;
  color: gray;
  font-weight: 700;
}

/*------- responsive css design------------- */
@media screen and (max-width: 1400px) {
  .cart-container {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
  }
}
@media screen and (max-width: 1200px) {
  .cart-container {
     width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
  }
}
@media screen and (max-width: 992px) {
  .cart-container {
     width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
  }
}
@media screen and (max-width: 768px) {
  .cart-container {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
  }
}
@media screen and (max-width: 576px) {
  .cart-container {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
  }
}
</style>
