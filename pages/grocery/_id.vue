<template>
<div>
    <div v-if="product">
        <div class="category-navbar">
            <Category-nav categoryName="Grocery" />
        </div>
        <div class="main-container">
            <div class="product-content">
                <div class="img-container">
                    <img :src='product.image' alt="">
                </div>
                <div class="product-details-content">
                    <h2>{{product.title}}</h2>
                    <h1>$ {{product.price}}</h1>
                    <p>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </p>
                    <p class="dec">{{product.description}}</p>

                    <div class="btn-container">
                        <!-- <div></div> -->
                        <button @click="addToCart()" id="addToCartBtn">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div v-else>
        <h1>product not found</h1>
    </div>

    <!-- <div>
        <button class="tablink" onclick="openPage('Home', this, 'red')">Home</button>
        <button class="tablink" onclick="openPage('News', this, 'green')" id="defaultOpen">News</button>
        <button class="tablink" onclick="openPage('Contact', this, 'blue')">Contact</button>
        <button class="tablink" onclick="openPage('About', this, 'orange')">About</button>

        <div id="Home" class="tabcontent">
            <h3>Home</h3>
            <p>Home is where the heart is..</p>
        </div>

        <div id="News" class="tabcontent">
            <h3>News</h3>
            <p>Some news this fine day!</p>
        </div>

        <div id="Contact" class="tabcontent">
            <h3>Contact</h3>
            <p>Get in touch, or swing by for a cup of coffee.</p>
        </div>

        <div id="About" class="tabcontent">
            <h3>About</h3>
            <p>Who we are and what we do.</p>
        </div>
    </div> -->
</div>
</template>

<script>
import Sidebar from '~/components/SharedComponent/sidebar.vue';

export default {
    layout: "categoryLayout",
    components: {
        Sidebar
    },
    computed: {
        product() {
            return this.$store.getters.getProductById(this.$route.params.id);
        },
    },
    methods:{
        addToCart(){
            this.$store.dispatch('addProductToCart', {
                product: this.product,
                quantity: 1
            });
        }
    }

    // methods() {
    //     function openPage(pageName, elmnt, color) {
    //         // Hide all elements with class="tabcontent" by default */
    //         var i, tabcontent, tablinks;
    //         tabcontent = document.getElementsByClassName("tabcontent");
    //         for (i = 0; i < tabcontent.length; i++) {
    //             tabcontent[i].style.display = "none";
    //         }

    //         // Remove the background color of all tablinks/buttons
    //         tablinks = document.getElementsByClassName("tablink");
    //         for (i = 0; i < tablinks.length; i++) {
    //             tablinks[i].style.backgroundColor = "";
    //         }

    //         // Show the specific tab content
    //         document.getElementById(pageName).style.display = "block";

    //         // Add the specific color to the button used to open the tab content
    //         elmnt.style.backgroundColor = color;
    //     }

    //     // Get the element with id="defaultOpen" and click on it
    //     document.getElementById("defaultOpen").click();
    // }
}
</script>

<style scoped>
.main-container {
    width: 93%;
    margin: auto;
    padding-top: 230px;
    font-family: "Rajdhani", sans-serif;
    color: gray;
}

.product-content {
    width: 79%;
    margin-left: auto;
    padding-bottom: 50px;
    font-family: "Rajdhani", sans-serif;
    display: flex;
}

.img-container img {
    width: 300px;
}

.product-details-content {
    padding: 0px 35px;
}

.product-details-content h2 {
    font-size: 25px;
}

.product-details-content h1 {
    margin-top: 10px;
    color: #ef8341;
}

.product-details-content p {
    margin-top: 10px;
}

.dec {
    margin-top: 20px;
}

.btn-container {
    margin-top: 30px;
}

#addToCartBtn {
    padding: 14px 50px;
    font-size: 15px;
    font-family: "Rajdhani", sans-serif;
    font-weight: 500;
    background: gainsboro;
    border: none;
    color: #ef8341;
    cursor: pointer;
}

/* .tablink {
    background-color: #555;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 17px;
}

.tablink:hover {
    background-color: #777;
}

.tabcontent {
    color: white;
    display: none;
    padding: 100px 20px;
} */
</style>
