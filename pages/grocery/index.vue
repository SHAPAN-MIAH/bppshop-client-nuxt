<template>
<div class="container">
    <div class="category-navbar">
        <Category-nav categoryName="Grocery" />
    </div>
    <div class="main-container">
        <div class="sidebar">
            <div class="sidebar-header">
                <h2><i class="bi bi-list"></i> Shop by Category</h2>
            </div>
            <ul class="menu-list">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
            </ul>
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
</div>
</template>

<script>
// import axios from 'axios';

export default {
    layout: "categoryLayout",
    // data() {
    //     return {
    //         products: []
    //     }
    // },

    // async mounted() {
    //     let result = await axios.get('https://fakestoreapi.com/products');
    //     console.log(result.data)
    //     this.products = result.data
    // },

    watch: {
        products() {
            // console.log(this.$store.state.products);
            return this.$store.state.products;
        }
    },
    beforeMount() {
        this.$store.dispatch('getProducts');
    },

    computed: {
        products() {
            console.log(this.$store.state.products);
            return this.$store.state.products;
        }
    }
};
</script>

<style scoped>
.main-container {
    display: flex;
    width: 93%;
    margin: auto;
    padding-top: 230px;
    font-family: "Rajdhani", sans-serif;
    color: gray;
}

.sidebar {
    width: 18%;
    height: 80vh;
    border: .01px solid rgb(233, 233, 233);
    padding: 10px 20px;
    border-radius: 5px;
    /* position: sticky; */
}
.sidebar-header{
    border-bottom: .5px solid #e6e6e6;
}
.sidebar-header h2{
    margin: 10px 0px;
}
.menu-list li {
    list-style: none;
    margin: 20px 0px;
    margin-left: 30px;
    padding-bottom: 10px;
    /* border-bottom: .1px solid #f1f1f1f1; */
}

.product-content {
    width: 79%;
    margin-left: auto;
    padding-bottom: 50px;
    font-family: "Rajdhani", sans-serif;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px 30px;
}

.product-card {
    height: 340px;
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

.price {
    color: #EF8341;
}

.product-card:hover {
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */

}

.img-container {
    overflow: hidden;
    background: #f5f5f5f5;
}

.product-card img {
    margin-top: 20px;
    height: 160px;
    width: 115px;
    overflow: hidden;
}

.quickView {
    opacity: 0;
    padding: 15px 0px;
    transform: translateY(50px);
    transition: transform 500ms ease-in-out;
}

.quickView span {
    font-size: 20px;
    margin: 0px 15px;
    color: gray;
    cursor: pointer;
}

.quickView span:hover {
    color: #EF8341;
}

.product-card:hover .quickView {
    opacity: 1;
    transform: translateY(0);
}
</style>
