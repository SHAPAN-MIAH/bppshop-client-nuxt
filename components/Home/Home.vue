<template>
<div>
    <!-- <h1>this is home page</h1> -->
    
    <HomeCart />
    <HomeFooter />
    <i class="fa-regular fa-abacus"></i>
</div>
</template>

<script>
import HomeCart from './HomeCart.vue'
import HomeFooter from './HomeFooter.vue'
export default {
    components: {
        HomeCart,
        HomeFooter
    }
}
</script>
