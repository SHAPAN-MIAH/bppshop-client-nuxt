<template>
<div>
    <div class="dropdown">
        <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="cart">
                <i class="bi bi-cart"></i>
                <span>{{cartItemCount}}</span>
            </div>
        </div>
        <div @click="$event.stopPropagation()" class="dropdown-menu cart-content">
            <div class="cart-header">
                <div>
                    <strong>My Cart : </strong>
                    <br>
                    <small v-if="cart.length"> You have {{cartItemCount}} items in your cart</small>
                </div>
                <div v-if="cart.length">
                    <a @click.prevent="clearCart()" class="clear-cart">
                        <span class="trashIcon"><i class="bi bi-trash3"></i></span>
                        Clear Cart
                    </a>
                </div>
            </div>
            <hr>
            <div v-if="cart.length">
                <div v-for="item in cart" :key="item.product.id" class="d-flex justify-content-between item-content">
                    <!-- <nuxt-link :to="`/grocery/${product.id}`"> -->
                    <div class="item">
                        <img width="20" :src="item.product.image" alt="">
                        <strong class="product-title">{{item.product.title.toString().substring(0, 25)}}...</strong>
                        <br>
                        <small>{{item.quantity}} x $ {{item.product.price}}</small>
                    </div>
                    <!-- </nuxt-link> -->

                    <div class="removeItem">
                        <span @click.prevent="removeProductFromCart(item.product)"><i class="bi bi-trash3"></i></span>
                    </div>
                </div>
            </div>
            <div v-else class="haveNoProductAlert">
                <strong>You have no product yet!</strong>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
                <strong>Total: ৳ {{cartTotalPrice}}</strong>
                <a class="checkoutBtn"> Checkout</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    // props: ['product'],
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        cartItemCount() {
            return this.$store.getters.cartItemCount;
        },
        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice
        },

    },
    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch("removeProductFromCart", product)

        },
        clearCart() {
            this.$store.dispatch('clearCart')
        }
    }
}
</script>

<style scoped>
.cart-header {
    display: flex;
    justify-content: space-between;
    cursor: default;
}

.clear-cart {
    text-decoration: none;
    color: #ef8341;
    cursor: pointer;
}

.clear-cart:hover,
.clear-cart:hover .trashIcon i {
    text-decoration: none;
    color: #f51616;
}

.trashIcon i {
    font-size: 15px !important;
    margin-right: -20px !important;
}

.cart i {
    font-size: 35px;
    margin-right: 25px;
    position: relative;
}

.cart span {
    position: absolute;
    margin-left: -35px;
    background: #fff;
    color: #ef8341;
    width: 22px;
    border-radius: 50px;
    text-align: center;
}

.cart-content {
    display: flex;
    margin-left: -405px !important;
    width: 450px;
    padding: 20px 30px !important;
    color: rgb(80, 80, 80) !important;

}

.item-content {
    margin-bottom: 15px;
}

.item img{
    margin-right: 10px;
}
.item small {
    margin-left: 35px;
}

.product-title {
    font-weight: 600;
}

.removeItem i {
    font-size: 18px;
    color: #ef8341;
}

.removeItem i:hover {
    color: #f51616;
}

.haveNoProductAlert {
    text-align: center !important;
}

.checkoutBtn{
    background: #f1f1f1;
    padding: 10px 30px;
    color: #ef8341;
    text-decoration: none;
    border-radius: 4px;
}
.checkoutBtn:hover{
    color: #ef8341;
    text-decoration: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>

<style scoped src="@/node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="@/node_modules/bootstrap-vue/dist/bootstrap-vue.css"></style>
