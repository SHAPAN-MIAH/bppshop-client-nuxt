<template>
<infinite-slide-bar duration="50s" delay="1s" :barStyle="{ background: '#ee9c69', padding: '5px 0', marginTop: '80px' }">
    <span class="categorySliderCart" v-for="item in category" :key="item.id">
        <nuxt-link :to="'/'+item.route">
            <img :src="item.imgIcon" alt="" />
            <h4>{{ item.name }}</h4>
        </nuxt-link>
    </span>
</infinite-slide-bar>

</template>

<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar'
export default {
    components: {
        InfiniteSlideBar
    },

    data() {
        return {
            category: [{
                    id: 1,
                    name: "Islamic Product",
                    imgIcon: "img/islamicicon.png",
                    status: "",
                    route: "islamic"
                },
                {
                    id: 2,
                    name: "Grocery",
                    imgIcon: "img/groceryicon.png",
                    status: "",
                    route: "grocery"

                },
                {
                    id: 3,
                    name: "Fashion",
                    imgIcon: "img/fasionicon.png",
                    status: "",
                    route: "fashion"

                },
                {
                    id: 4,
                    name: "Electronics",
                    imgIcon: "img/electronicicon.png",
                    status: "Upcoming",
                    route: "electronics"

                },
                {
                    id: 5,
                    name: "Baby Care",
                    imgIcon: "img/babycareicon.png",
                    status: "Upcoming",
                    route: "babyCare"

                },
                {
                    id: 6,
                    name: "Cosmetics",
                    imgIcon: "img/cosmaticicon.png",
                    status: "Upcoming",
                    route: "cosmetics"

                },
                {
                    id: 7,
                    name: "Furniture",
                    imgIcon: "img/furntureicon.png",
                    status: "Upcoming",
                    route: "furniture"

                },
                {
                    id: 8,
                    name: "Shoes",
                    imgIcon: "img/shoesicon.png",
                    status: "Upcoming",
                    route: "shoes"

                },
            ],
        };
    },
}
</script>

<style scoped>
a{
    text-decoration: none;
    display: flex;
}
.categorySliderCart{
    display: inline-flex;
    margin: 10px 40px;
    align-items: center;
    font-family: "Rajdhani", sans-serif;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 30px;
    padding: 5px 30px;
    /* justify-content: space-around; */
}
.categorySliderCart img{
    width: 35px;
}
.categorySliderCart h4{
    margin-left: 12px;
    margin-top: 8px;
    color: gray;
}
</style>
