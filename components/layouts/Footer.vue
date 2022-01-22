<template>
  <div class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="row">
          <div class="col-lg-9">
            <div class="footer-menu">
              <div class="footer_menu_item">
                <h4 class="footer-item-title"> {{ $t("AboutUs") }} </h4>
                <ul>
                  <li><a href="#!"> {{ $t("AboutCompany") }} </a></li>
                  <li><a href="#!"> {{ $t("Quality") }} </a></li>
                  <li><a href="#!"> {{ $t("PrivecyPolicy") }} </a></li>
                  <li><a href="#!"> {{ $t("Contacts") }}</a></li>
                </ul>
              </div>
              <div class="footer_menu_item">
                <h4 class="footer-item-title"> {{ $t("OnlineShopping") }} </h4>
                <ul>
                  <li><a href="#!"> {{ $t("HowToOrder") }} </a></li>
                  <li><a href="#!"> {{ $t("Deliver&Pay") }}</a></li>
                  <li><a href="#!"> {{ $t("ProductExchange/Refund") }} </a></li>
                  <li><a href="#!"> {{ $t("Questions&Answers") }}</a></li>
                </ul>
              </div>
              <div class="footer_menu_item">
                <h4 class="footer-item-title"> {{ $t("Cooperation") }} </h4>
                <ul>
                  <li><a href="#!"> B2B {{ $t("Service") }} </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="footer-contact">
              <h4> {{ $t("Sign&Stock") }}</h4>
              <div class="email">
                <input type="text" placeholder="E-mail" />
                <button> {{ $t("Sign") }} </button>
              </div>
              <div class="contact-min">
                <a href="#!">
                  <i class="icon-phone-call-3-1"></i> +(992) 77777 4851
                </a>
                <div class="social">
                  <i class="icon-facebook"></i>
                  <i class="icon-arrow-instagram"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="footer-bottom">
              <h4>© 2021. {{ $t("RightsReserved") }} </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>