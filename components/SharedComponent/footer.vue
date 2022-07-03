<template>
  <div class="common-footer-container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="footer-containt">
            <p class="footerCopyright">© All Right Reserved BPPSHOPS</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="footer-containt">
            <div>
              <img src="img/ftLogo.png" />
            </div>
            <div>
              <p>Our logistics Partner</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="footer-containt">
            <div>
              <img src="img/excelitlogo.png" />
            </div>
            <div>
              <p>Our IT Partner</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="footer-containt">
            <div class="footer-social-containt">
              <a href="#"><i class="fa-brands fa-whatsapp-square"></i></a>
              <a href="#"><i class="fa-brands fa-facebook-messenger"></i></a>
            </div>
          </div>
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



<style scoped>
.common-footer-container {
  background-color: #2a2a2a;
  color: white;
  text-align: center;
  font-family: "Rajdhani";
}
.footer-containt {
  margin: 20px 0px;
  padding-top: 20px;
}
.footer-containt p {
  margin-top: 5px;
}
.footerCopyright {
  padding-top: 40px;
}
.footer-social-containt {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 60px;
}
.footer-social-containt i {
  font-size: 42px;
}
.fa-facebook-messenger {
  color: #006aff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 8px;
  border-radius: 30px;
}
.fa-whatsapp-square {
  color: #0a58ca;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  border-radius: 30px;
}
</style>