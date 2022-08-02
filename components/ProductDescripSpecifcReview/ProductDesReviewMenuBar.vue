<template>
    <ul>
        <li>
            <nuxt-link :to="`/fashion`">Descriptions</nuxt-link>
        </li>
        <li>
            Specifications
        </li>
        <li>
            Seller
        </li>
        <li>
            Review
            <span class="review-count">2</span>
        </li>
    </ul>
</template>
<script>
export default {
}
</script>

<style scoped>
ul{
    width: 75%;
    margin: auto;
    display: flex;
    font-family: "Rajdhani", sans-serif;
    border-bottom: 1px solid gainsboro;
}
ul li{
    list-style: none;
    margin: 10px;
    margin-left: 0px;
    background: rgb(238, 238, 238);
    color: gray;
    padding: 10px 30px;
    cursor: pointer;
}
ul li:hover{
    color: #EF8341;
    background: rgb(224, 224, 224);
}
.review-count{
    background: #EF8341;
    border-radius: 50px;
    padding: 0px 6px;
    color: #f1f1f1;
    font-size: 14px;
}
</style>