<template>
<div class="container">
    <div class="category-navbar">
        <Category-nav categoryName="Grocery" />
    </div>
    <div class="product-content">
        <div v-for="product in products" :key="product.id">

            <div class="product-card">
                <div>
                  <img :src="product.image" alt="">
                <p>{{product.title}}</p>
                </div>

                <div class="quickView">
                  <span>Quick View</span>
                </div>
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

//  const view = ()=>{
//   const quickView = document.querySelector('.quickView');
//   quickView.style.display = 'block'
//  }

</script>

<style scoped>
.product-content {
    width: 70%;
    margin: auto;
    padding-top: 250px;
    padding-bottom: 50px;
    font-family: "Rajdhani", sans-serif;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
}

.product-card {
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    transition: all .5s;
    /* background: #f8f8f8; */
}
.product-card:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.product-card img{
   margin: 20px;
   height: 140px;
   width: 110px;
}

.quickView{
  opacity: 0;
  transition: all 1s;
  background: #f1f1f1;
  padding: 15px 0px;
}

.product-card:hover .quickView{
   opacity: 1;
   bottom: 100;
}
</style>

