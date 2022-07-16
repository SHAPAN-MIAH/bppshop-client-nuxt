<template>
<div class="container">
    <div class="category-navbar">
        <Category-nav categoryName="Grocery" />
    </div>
    <div class="product-content">
        <div v-for="product in products" :key="product.id">

            <div class="product-card">
                <div class="img-container">
                    <img :src="product.image" alt="">
                    <div class="quickView">
                        <span><i class="bi bi-eye"></i></span>
                        <span><i class="bi bi-heart"></i></span>
                        <span><i class="bi bi-bag-plus"></i></span>
                    </div>
                </div>
                <p>{{product.title.toString().substring(0, 25)}}....</p>
                <p>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                  <i class="bi bi-star"></i>
                </p>
                <p class="price">৳ {{product.price}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    layout: "categoryLayout",
    data() {
        return {
            products: []
        }
    },

    async mounted() {
        let result = await axios.get('https://fakestoreapi.com/products');
        console.log(result.data)
        this.products = result.data
    },
};
</script>

<style scoped>
.product-content {
    width: 70%;
    margin: auto;
    padding-top: 230px;
    padding-bottom: 50px;
    font-family: "Rajdhani", sans-serif;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px 30px;
}

.product-card {
    height: 330px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    align-items: center;
    text-align: center;
    border-radius: 4px;
    transition: all .100ms;
    overflow: hidden;
}
.product-card p {
    margin-top: 10px;
    text-align: left;
    margin-left: 10px;
}

.price{
  color: #EF8341;
}
.product-card:hover {
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
    
}

.img-container{
  overflow: hidden;
  background: #f5f5f5f5;
}
.product-card img {
    margin-top: 20px;
    height: 150px;
    width: 110px;
    overflow: hidden;
}

.quickView {
    opacity: 0;
    padding: 15px 0px;
    transform: translateY(50px);
    transition: transform 350ms ease-in-out;
}
.quickView span{
    font-size: 20px;
    margin: 0px 15px;
    color: gray;
    cursor: pointer;
}
.quickView span:hover{
    color: #EF8341;
}

.product-card:hover .quickView {
    opacity: 1;
    transform: translateY(0);
}
</style>
