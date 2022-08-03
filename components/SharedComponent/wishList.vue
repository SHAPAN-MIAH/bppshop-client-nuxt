<template>
<div class="dropdown">
    <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <div class="wishlist-container">
            <i class="bi bi-heart"></i>
            <span>{{wishListItemCount}}</span>
        </div>
    </div>

    <div @click="$event.stopPropagation()" class="dropdown-menu cart-content">
        <div class="cart-header">
            <div>
                <strong>My WishList:</strong>
                <br>
                <small v-if="wishList.length"> You have {{wishListItemCount}} items in your wishList</small>
            </div>
            <div v-if="wishList.length">
                <a @click.prevent="clearWishList()"  class="clear-cart">
                    Clear All
                </a>
            </div>
        </div>
        <hr>
        <div v-if="wishList.length">
            <div v-for="item in wishList" :key="item.product.id" class="d-flex justify-content-between item-content">
                <div class="item">
                    <img width="20" :src="item.product.image" alt="">
                    <strong class="product-title">{{item.product.title.toString().substring(0, 25)}}...</strong>
                    <br>
                    <small>{{item.quantity}} x ৳ {{item.product.price}}</small>
                </div>
                <div class="addToCart-removeItem">
                    <span @click.prevent="addToCart(item.product)"><i class="bi bi-bag-plus addToCartBtn"></i></span>
                    <span @click.prevent="removeProductFromWishList(item.product)"><i class="bi bi-trash3"></i></span>
                </div>
            </div>
        </div>
        <div v-else class="haveNoProductAlert">
            <strong>You have no product yet!</strong>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    computed: {
        wishList() {
            return this.$store.state.wishList;
        },
        wishListItemCount() {
            return this.$store.getters.wishListItemCount
        }
    },
    methods:{
        addToCart(product) {
            this.$store.dispatch('addProductToCart', {
                product: product,
                quantity: 1
            });
        },

        removeProductFromWishList(product) {
            this.$store.dispatch("removeProductFromWishList", product)

        },

        clearWishList() {
            this.$store.dispatch('clearWishList')
        }
    }
}
</script>

<style scoped>
.wishlist-container {
    margin-right: 30px;
}

.wishlist-container i {
    font-size: 28px;
    position: relative;
    color: rgb(230, 230, 230);
}

.wishlist-container span {
    position: absolute;
    background: #fff;
    color: #ef8341;
    border-radius: 50px;
    text-align: center;
    padding: 0px 6px;
    margin-left: -7px;
    margin-top: -5px;
    font-size: 14px;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    cursor: default;
}
.cart-header i{
    color: rgb(100, 100, 100);
}
.cart-header strong{
    font-size: 20px;
    font-weight: 600;
    color: rgb(100, 100, 100);
}

.clear-cart {
    text-decoration: none;
    color: #ef8341;
    cursor: pointer;
}

.clear-cart .trashIcon i {
    color: #ef8341;
    font-size: 23px;
    margin-right: -30px !important;
}

.clear-cart:hover,
.clear-cart:hover .trashIcon i {
    text-decoration: none;
    color: #f51616;
}

.cart-content {
    display: flex;
    margin-left: -390px !important;
    width: 430px;
    padding: 20px 30px !important;
    color: rgb(80, 80, 80) !important;

}

.item-content {
    margin-bottom: 15px;
}

.item img {
    margin-right: 10px;
}

.item small {
    margin-left: 35px;
    font-size: 15px;
}

.product-title {
    font-weight: 600;
}

.addToCart-removeItem i {
    font-size: 18px;
    color: #ef8341;
    margin-left: 18px;
}

.addToCart-removeItem i:hover {
    color: #f51616;
}

.addToCartBtn{
    color: gray !important;
}
.addToCartBtn:hover{
    color: #f51616 !important;
}
.haveNoProductAlert {
    text-align: center !important;
}

.checkoutBtn {
    background: #f1f1f1;
    padding: 10px 30px;
    color: #ef8341;
    text-decoration: none;
    border-radius: 4px;
}

.checkoutBtn:hover {
    color: #ef8341;
    text-decoration: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
<style scoped src="@/node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="@/node_modules/bootstrap-vue/dist/bootstrap-vue.css"></style>
