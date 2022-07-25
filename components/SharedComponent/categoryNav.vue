<template>
<div class="category-nav">
    <h2>{{categoryName}}</h2>
</div>
</template>

<script>
export default {
    name: 'categoryNav',
    props: ['categoryName']
}
</script>

<style scoped>
.category-nav {
    width: 100%;
    background: #EF8341;
    text-align: center;
    font-family: "Rajdhani", sans-serif;
    color: #fff;
    position: fixed;
    margin-top: 154px;
    padding: 5px 0px;
}

.category-nav h2 {
    font-weight: 500;
}
</style>
