<template>
<div>
    <Category-nav categoryName="Fashion" />
    <h1>This is fashion page</h1>
  </div>

</template>

<script>
export default {
  layout: "categoryLayout",
};
</script>

<style scoped>
.fashion-header {
  width: 100%;
  background: #ef8341;
  text-align: center;
  font-family: "Rajdhani", sans-serif;
  color: #fff;
}
.fashion-header h2 {
  font-weight: 500;
  padding: 5px 0px;
}
</style>
