<template>
<div>
    <div class="category-navbar">
        <Category-nav categoryName="Cosmetics" />
    </div>
</div>
</template>

<script>
export default {
    layout: "categoryLayout",
};
</script>

<style scoped>
.category-nav {
    width: 100%;
    background: #EF8341;
    text-align: center;
    font-family: "Rajdhani", sans-serif;
    color: #fff;
    position: fixed;
    margin-top: 155px;
}

.category-nav h2 {
    font-weight: 500;
    padding: 5px 0px;
}
</style>
