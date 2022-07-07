<template>
<div class="common-footer">
    <div class=" common-footer-container">
        <div class="footer-content">
            <p>© All Right Reserved BPPSHOPS</p>
            <div class="IT-Partner">
                <img width="130" src="img/excelitlogo.png" />
                <p>Our IT Partner</p>
            </div>
            <div class="logistics-Partner">
                <img width="40" src="img/ftLogo.png" />
                <p>Our logistics Partner Bpp Shop Courier</p>
            </div>
            <div class="footer-social-container">
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i class="fa-brands fa-facebook-messenger"></i></a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "commonFooter",
};
</script>



<style scoped src="@/node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="@/node_modules/bootstrap-vue/dist/bootstrap-vue.css"></style> 

<style scoped>
.common-footer {
    background: #2a2a2a;
    font-family: "Rajdhani", sans-serif;
    color: #fff;
}

.common-footer-container {
    margin: 0px 70px;
    padding: 40px 0px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
}

.footer-social-container {
    margin-left: auto;
}

.fa-whatsapp {
    color: white;
    background-color: #25D366;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 15px 17px;
    border-radius: 30px;
    font-size: 30px;
    margin-right: 50px;
}

.fa-whatsapp:hover,
.fa-facebook-messenger:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.fa-facebook-messenger {
    color: white;
    background-color: #0A7CFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 15px;
    border-radius: 30px;
    font-size: 30px;
}

/* Footer responsive css */
@media screen and (max-width: 992px) {
    .footer-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }

    .footer-social-container {
        display: flex;
        margin-top: 0px !important;
        margin: auto;
        margin-left: 0;
    }

    .fa-whatsapp {
        margin-right: 20px;
    }
}
@media screen and (max-width: 768px) {
    .footer-content {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
    }

    .footer-social-container {
        display: flex;
        margin-top: 0px !important;
        margin: auto;
    }

    .IT-Partner {
        margin: 0px;
    }

    .fa-whatsapp {
        margin-right: 20px;
    }
}

@media screen and (max-width: 576px) {
    .footer-content {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
    }

    .footer-social-container {
        display: flex;
        margin-top: 0px !important;
        margin: auto;
    }

    .IT-Partner {
        margin: 0px;
    }

    .fa-whatsapp {
        margin-right: 10px;
    }
}
</style>
