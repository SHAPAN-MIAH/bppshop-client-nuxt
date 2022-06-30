<template>
<div>
    <!-- <nuxt-link to="/">home</nuxt-link>
        <nuxt-link to="/about">about</nuxt-link> -->
    <Nav />

    <nuxt />
</div>
</template>

<script>
import Nav from '../components/SharedComponent/Nav.vue'
export default {
    components:{
        Nav
    }
}
</script>
