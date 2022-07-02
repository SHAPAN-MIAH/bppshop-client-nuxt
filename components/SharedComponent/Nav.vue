<template>
<div class="navbar">
    <nav class="nav">
        <input type="checkbox" name="" id="openSidebarmenu">
        <label for="openSidebarmenu" class="sidebarIconToggle">
            <div class="spinner top"></div>
            <div class="spinner middle"></div>
            <div class="spinner bottom"></div>
        </label>
        <div id="sidebarMenu">
            <ul class="menu">
                <li><a href="">
                        <nuxt-link to="/"><i class="bi bi-house-door-fill"></i> Home</nuxt-link>
                    </a></li>
                <li><a href="">
                        <nuxt-link to="/"><img width="15" class="sidebar-Icon" src="img/islamicicon.png" alt=""> Islamic Products</nuxt-link>
                    </a></li>
                <li><a href="">
                        <nuxt-link to="/"><img width="15" class="sidebar-Icon" src="img/groceryicon.png" alt=""> Grocery</nuxt-link>
                    </a></li>
                <li><a href="">
                        <nuxt-link to="/"><img width="15" class="sidebar-Icon" src="img/fasionicon.png" alt=""> Fashion</nuxt-link>
                    </a></li>
                <li><a href="">
                        <nuxt-link to="/"><img width="15" class="sidebar-Icon" src="img/electronicicon.png" alt=""> Electronics</nuxt-link>
                    </a></li>
                <li><a href="">
                        <nuxt-link to="/"><img width="15" class="sidebar-Icon" src="img/babycareicon.png" alt=""> Baby Care</nuxt-link>
                    </a></li>
                <li><a href="">
                        <nuxt-link to="/"><img width="15" class="sidebar-Icon" src="img/cosmaticicon.png" alt=""> Cosmetics</nuxt-link>
                    </a></li>
                <li><a href="">
                        <nuxt-link to="/"><img width="15" class="sidebar-Icon" src="img/furntureicon.png" alt=""> Furniture</nuxt-link>
                    </a></li>
                <li><a href="">
                        <nuxt-link to="/"><img width="15" class="sidebar-Icon" src="img/shoesicon.png" alt=""> Shoes</nuxt-link>
                    </a></li>
            </ul>
        </div>

        <div class="nav-content">
            <div class="logo">
                <img src="img/bppshops-logo.png" alt="">
            </div>
            <div class="searchInput">
                <input type="text" name="" id="search" placeholder="Search by Product Category" >
                <span class="searchIcon"><i class="bi bi-search"></i></span>
            </div>
            <div class="login">
                <h6>Login</h6>
            </div>
        </div>
    </nav>
</div>
</template>

<style scoped>
.nav {
    background: #EF8341;
    width: 100%;
    height: 80px;
    /* position: fixed; */
    z-index: 10;
    font-family: 'Rajdhani', sans-serif;
}

#sidebarMenu {
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    margin-top: 80px;
    background: rgb(166, 165, 165);
    transform: translateX(-250px);
    transition: transform 250ms ease-in-out;
}

#openSidebarmenu {
    display: none;
}

.sidebarIconToggle {
    width: 22px;
    height: 22px;
    position: absolute;
    z-index: 20;
    top: 30px;
    left: 22px;
    cursor: pointer;
}

.spinner {
    height: 2px;
    background: #fff;
    transition: all 0.3s;
}

.middle,
.bottom {
    margin-top: 5px;
}

#openSidebarmenu:checked~.sidebarIconToggle>.middle {
    opacity: 0;
}

#openSidebarmenu:checked~.sidebarIconToggle>.top {
    transform: rotate(135deg);
    margin-top: 8px;
}

#openSidebarmenu:checked~.sidebarIconToggle>.bottom {
    transform: rotate(-135deg);
    margin-top: -9px;
}

#openSidebarmenu:checked~#sidebarMenu {
    transform: translateX(0px);
}

.menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    color: #fff;
    border-bottom: 1px solid rgba(225, 225, 225, 0.10);
}

.menu li a {
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 9px;
    font-size: 17px;
    transition: all .3s;
}
.menu li:hover a {
    margin-left: 5px;
}
.sidebar-Icon{
    border-radius: 2px;
}
.nav-content {
    display: flex;
}

.logo {
    margin-left: 50px;
    padding-top: 16px;
}

.logo img {
    width: 13em;
    cursor: pointer;
}

.searchInput {
    margin: auto;
    margin-top: 15px;
    position: relative;
}

#search {
    width: 700px;
    border: none;
    background: #fff;
    border-radius: 30px;
    padding: 14px 25px;
    z-index: 100;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.searchIcon {
    position: absolute;
    margin-left: -35px;
    margin-top: 15px;
    cursor: pointer;
}

.login {
    margin-right: 30px;
    color: #fff;
    font-size: 25px;
}

.login h6 {
    margin-top: 27px;
    cursor: pointer;
}
</style>
