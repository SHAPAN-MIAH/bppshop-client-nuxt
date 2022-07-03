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
                <img class="bpshopsLogo" src="img/bppshops-logo.png" alt="">
                <img class="bpshopsIcon" src="img/bpp_icon.png" alt="">
            </div>
            <div class="searchInput">
                <input type="text" name="" id="search" placeholder="Search by Product Category">
                <span class="searchIcon"><i class="bi bi-search"></i></span>
            </div>
            <div class="login">
                <h6>Login</h6>
                <span class="threeDotMenuIcon"><i class="fa-solid fa-ellipsis-vertical"></i></span>
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
    position: fixed;
    z-index: 10;
    font-family: 'Rajdhani', sans-serif;
    top: 0;
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
    border-bottom: 1px solid rgba(225, 225, 225, 0.15);
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

.sidebar-Icon {
    border-radius: 2px;
}

.nav-content {
    display: flex;
}

.logo {
    margin-left: 50px;
    padding-top: 16px;
}

.bpshopsLogo {
    width: 13em;
    cursor: pointer;
}

.bpshopsIcon {
    display: none;
    transition: all 1s;
    margin-left: 25px;
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
    margin-left: -200px;
    z-index: 100;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    transition: all .5s;
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

.threeDotMenuIcon {
    color: #fff;
    display: none;
    margin-top: 25px;
    cursor: pointer;
}

/* responsive css */
@media only screen and (max-width: 1400px) {
    #search {
        width: 600px;
    }
}

@media only screen and (max-width: 1300px) {
    #search {
        width: 550px;
    }
}

@media only screen and (max-width: 1200px) {
    #search {
        width: 500px;
        padding: 14px 20px;
        margin-left: -180px;
    }
}

@media only screen and (max-width: 1100px) {
    #search {
        width: 450px;
        padding: 14px 20px;
        margin-left: -180px;
    }
}

@media only screen and (max-width: 1000px) {
    #search {
        width: 400px;
        padding: 14px 20px;
        margin-left: -160px;
    }
}

/* @media only screen and (max-width: 992px) {
    #search {
        width: 450px;
        padding: 12px 20px;
        margin-left: -150px;
    }
} */

@media only screen and (max-width: 900px) {
    #search {
        width: 370px;
        padding: 14px 20px;
        margin-left: -130px;
    }
}

@media only screen and (max-width: 892px) {
    #search {
        width: 350px;
        padding: 12px 20px;
        margin-left: -100px;
    }
}

@media only screen and (max-width: 800px) {
    #search {
        width: 320px;
        padding: 12px 20px;
        margin-left: -60px;
    }
}

@media only screen and (max-width: 768px) {
    #search {
        width: 300px;
        padding: 12px 20px;
        margin-left: -30px;
    }

    .bpshopsLogo {
        display: none;
    }

    .bpshopsIcon {
        display: block;
        width: 45px;
    }

    .login h6 {
        display: none;
    }

    .threeDotMenuIcon {
        display: block;
    }
}

@media only screen and (max-width: 668px) {
    #search {
        width: 270px;
        padding: 12px 20px;
        margin-left: -20px;
    }

    .bpshopsLogo {
        display: none;
    }

    .bpshopsIcon {
        display: block;
        width: 45px;
    }

    .login h6 {
        display: none;
    }

    .threeDotMenuIcon {
        display: block;
    }
}

@media only screen and (max-width: 576px) {
    #search {
        width: 250px;
        padding: 12px 15px;
        margin-left: -10px;
    }

    .bpshopsLogo {
        display: none;
    }

    .bpshopsIcon {
        display: block;
        width: 45px;
        margin-left: 10px;
    }
    .login h6 {
        display: none;
    }

    .threeDotMenuIcon {
        display: block;
    }
}
</style>
