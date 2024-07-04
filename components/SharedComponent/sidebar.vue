<template>
<!-- <div class="sidebar-container"> -->
    <div class="sidebar">
        <div class="sidebar-header">
            <h2><i class="bi bi-list"></i> Shop by Category</h2>
        </div>
        <ul class="menu-list">
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ul>
    </div>
<!-- </div> -->
</template>

<style scoped>
.sidebar {
    width: 18%;
    height: 70vh;
    border: .01px solid rgb(233, 233, 233);
    padding: 10px 20px;
    border-radius: 5px;
    position: -webkit-sticky;
    position: sticky;
    top: 220px;
    margin-bottom: 50px;
    z-index: 1;
}

.sidebar-header {
    border-bottom: .5px solid #e6e6e6;
}

.sidebar-header h2 {
    margin: 10px 0px;
}

.menu-list li {
    list-style: none;
    margin: 20px 0px;
    margin-left: 30px;
    padding-bottom: 10px;
    border-bottom: .1px solid #f1f1f1f1;
}
.menu-list li:hover {
    color: aqua;
}
</style>
