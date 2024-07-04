<template>
<div>
    <Nav />
    <nuxt />
    <FooterComp />
</div>
</template>

<script>
import Nav from '@/components/SharedComponent/Nav.vue'
import FooterComp from '@/components/SharedComponent/footer.vue'

export default {
    components: {
        Nav,
        FooterComp,

    }
}
</script>
