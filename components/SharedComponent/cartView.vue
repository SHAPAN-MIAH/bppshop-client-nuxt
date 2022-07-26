<template>
<div>
    <!-- <div @click="togglecart()" class="cart">
        <i class="bi bi-cart"></i>
        <span>{{cartItemCount}}</span>
    </div> -->

    <div>
        <div class="dropdown">
            <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div class="cart">
                    <i class="bi bi-cart"></i>
                    <span>{{cartItemCount}}</span>
                </div>
            </div>
            <div class="dropdown-menu cart-content">
                <div v-for="item in cart" :key="item.product.id" class="d-flex justify-content-between">
                    <div class="item">
                       <strong class="product-title">{{item.product.title.toString().substring(0, 25)}}...</strong>
                       <br>
                       {{item.quantity}} x $ {{item.product.price}}
                    </div>
                    <div class="removeItem">
                        <i class="bi bi-trash3"></i>
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <strong>Total: $ {{cartTotalPrice}}</strong>
                    <a class="clear-cart" href="">Clear Cart</a>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="cartDropdown">
        <h1>hello</h1>
    </div> -->
</div>
</template>

<script>
export default {
    computed: {
        cart(){
            return this.$store.state.cart;
        },
        cartItemCount() {
            return this.$store.getters.cartItemCount;
        },
        cartTotalPrice(){
            return this.$store.getters.cartTotalPrice
        }
    },
    methods: {
        togglecart() {
            alert('hello')

        }
    }
}
</script>

<style scoped>
.clear-cart{
    text-decoration: none;
    color: #ef8341;
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
.cart-content{
    display: flex;
    margin-left: -305px !important;
    width: 350px;
    padding: 20px !important;
    color: rgb(80, 80, 80) !important;

}
.product-title{
    font-weight: 600;
}
.removeItem i{
    font-size: 18px;
    color: #ef8341;
}
</style>

<style scoped src="@/node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="@/node_modules/bootstrap-vue/dist/bootstrap-vue.css"></style>
