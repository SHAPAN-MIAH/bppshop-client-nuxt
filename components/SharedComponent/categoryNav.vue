
<template>
<div class="islamic-container">
    <div class="islamic-header">
        <h2>{{categoryName}}</h2>
    </div>
    
   
</div>
</template>


<script>
export default {
    name:'categoryNav',
    props:['categoryName']
}
</script>

<style scoped>
.islamic-header{
    width: 100%;
    background: #EF8341;
    text-align: center;
    font-family: "Rajdhani", sans-serif;
    color: #fff;
    position: fixed;
    margin-top: 155px;
}
.islamic-header h2{
    font-weight: 500;
    padding: 5px 0px;
}
</style>
