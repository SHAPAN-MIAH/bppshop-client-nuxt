<template>
<div class="div">
  <Home/>
      <button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
</div>
</template>

<script>
import Home from '~/components/Home/Home.vue';
export default {
    name: "IndexPage",
    components: { Home }
}
</script>
