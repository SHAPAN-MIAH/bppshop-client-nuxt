<template>
<div>
    <Nav />
    <CategorySlider />
    <CategoryNav/>
    <nuxt />
    <FooterComp />
</div>
</template>

<script>
import Nav from '@/components/SharedComponent/Nav.vue'
import FooterComp from '@/components/SharedComponent/footer.vue'
import CategorySlider from '~/components/SharedComponent/categorySlider.vue'
import CategoryNav from '~/components/SharedComponent/categoryNav.vue'

export default {
    components: {
    Nav,
    FooterComp,
    CategorySlider,
    CategoryNav
}
}
</script>

<style scoped>
</style>
