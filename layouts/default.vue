<template>
  <div>
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/about">about</nuxt-link>
    


    <FooterComp/>
  </div>
</template>
<script>
import FooterComp from '@/components/SharedComponent/footer.vue'
export default {
    components:{
        FooterComp
    }
    
}
</script>