<template>
<div class="navbar">
    <nav class="nav">
        <div class="nav-container">
            <input type="checkbox" name="" id="openSidebarmenu" />
            <label for="openSidebarmenu" class="sidebarIconToggle">
                <div class="spinner top"></div>
                <div class="spinner middle"></div>
                <div class="spinner bottom"></div>
            </label>
            <div id="sidebarMenu">
                <ul class="menu">
                    <li>
                        <a href="">
                            <nuxt-link to="/"><i class="bi bi-house-door-fill"></i> Home</nuxt-link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <nuxt-link to="/islamic"><img width="15" class="sidebar-Icon" src="img/islamicicon.png" alt="" />
                                Islamic Products</nuxt-link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <nuxt-link to="/grocery"><img width="15" class="sidebar-Icon" src="img/groceryicon.png" alt="" />
                                Grocery</nuxt-link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <nuxt-link to="/fashion"><img width="15" class="sidebar-Icon" src="img/fasionicon.png" alt="" />
                                Fashion</nuxt-link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <nuxt-link to="/electronics"><img width="15" class="sidebar-Icon" src="img/electronicicon.png" alt="" />
                                Electronics</nuxt-link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <nuxt-link to="/babyCare"><img width="15" class="sidebar-Icon" src="img/babycareicon.png" alt="" />
                                Baby Care</nuxt-link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <nuxt-link to="/cosmetics"><img width="15" class="sidebar-Icon" src="img/cosmaticicon.png" alt="" />
                                Cosmetics</nuxt-link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <nuxt-link to="/furniture"><img width="15" class="sidebar-Icon" src="img/furntureicon.png" alt="" />
                                Furniture</nuxt-link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <nuxt-link to="/shoes"><img width="15" class="sidebar-Icon" src="img/shoesicon.png" alt="" />
                                Shoes</nuxt-link>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="nav-content">
                <!-- <nuxt-link to="/"> -->
                <div class="logo">
                    <nuxt-link to="/">
                        <img class="bpshopsLogo" src="img/bppshops-logo.png" alt="" />
                    </nuxt-link>
                    <nuxt-link to="/">
                        <img class="bpshopsIcon" src="img/bpp_icon.png" alt="" />
                    </nuxt-link>
                </div>
                <!-- </nuxt-link> -->
                <div class="searchInput">
                    <input type="text" name="" id="dynamic-placeholder" class="search" placeholder="Search by Product Category" />
                    <span class="searchIcon"><i class="bi bi-search"></i></span>
                </div>

                <div class="cart">
                    <CartView/>
                </div>
                
                <div class="login">
                    <h6>Login</h6>
                    <span class="threeDotMenuIcon"><i class="fa-solid fa-ellipsis-vertical"></i></span>
                </div>
                <!-- <modal name="my-modal">
                    <div class="modal-content">
                        <h2>It work's!</h2>
                        <button @click="$modal.hide('my-modal')">Close it</button>
                    </div>
                </modal> -->
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import CartView from "./cartView.vue";
export default {
    
    mounted() {
        window.onload = function () {
            const sp = new SuperPlaceholder({
                placeholders: [
                    "By Product Name...",
                    "By Product Category...",
                    "By Brand Name...",
                    "By Product Code...",
                ],
                preText: "Search",
                stay: 1000,
                speed: 100,
                element: "#dynamic-placeholder",
            });
            sp.init();
        };
    },
    components: { CartView }
};

// ------

const SuperPlaceholder = function (options) {
    this.options = options;
    this.element = options.element;
    this.placeholderIdx = 0;
    this.charIdx = 0;

    this.setPlaceholder = function () {
        let placeholder = options.placeholders[this.placeholderIdx];
        let placeholderChunk = placeholder.substring(0, this.charIdx + 1);
        document
            .querySelector(this.element)
            .setAttribute(
                "placeholder",
                this.options.preText + " " + placeholderChunk
            );
    };

    this.onTickReverse = function (afterReverse) {
        if (this.charIdx === 0) {
            afterReverse.bind(this)();
            clearInterval(this.intervalId);
            this.init();
        } else {
            this.setPlaceholder();
            this.charIdx--;
        }
    };

    this.goReverse = function () {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(
            this.onTickReverse.bind(this, function () {
                this.charIdx = 0;
                this.placeholderIdx++;
                if (this.placeholderIdx === options.placeholders.length) {
                    // end of all placeholders reached
                    this.placeholderIdx = 0;
                }
            }),
            this.options.speed
        );
    };

    this.onTick = function () {
        let placeholder = options.placeholders[this.placeholderIdx];
        if (this.charIdx === placeholder.length) {
            // end of a placeholder sentence reached
            setTimeout(this.goReverse.bind(this), this.options.stay);
        }

        this.setPlaceholder();

        this.charIdx++;
    };

    this.init = function () {
        this.intervalId = setInterval(this.onTick.bind(this), this.options.speed);
    };

    this.kill = function () {
        clearInterval(this.intervalId);
    };
    
};
</script>
<!-- <style scoped src="@/node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="@/node_modules/bootstrap-vue/dist/bootstrap-vue.css"></style> -->
<style src="~/assets/css/nav.css" scoped></style>
