<template>
<div>
    <Nav/>
    <CategorySlider />
    <nuxt />
    <FooterComp/>
</div>
</template>

<script>
import Nav from '@/components/SharedComponent/Nav.vue'
import FooterComp from '@/components/SharedComponent/footer.vue'
import CategorySlider from '~/components/SharedComponent/categorySlider.vue'

export default {
    components: {
    Nav,
    FooterComp,
    CategorySlider
}
}
</script>

<style scoped>
</style>
