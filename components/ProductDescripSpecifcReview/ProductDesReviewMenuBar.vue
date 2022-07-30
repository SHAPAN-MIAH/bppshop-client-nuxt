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
</style>