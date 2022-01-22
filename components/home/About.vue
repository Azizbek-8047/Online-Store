<template>
  <div class="home-about">
    <div class="container">
      <div class="home-about_wrapper">
        <h1 class="about-title"> {{ $t("AboutUs") }} </h1>
        <div class="about-info">
          <div class="row">
            <div class="col-lg-6">
              <div class="about_left">
                  <div class="about-img">
                      <img src="~/assets/images/png/logo-bi-1.png" alt="">
                  </div>
                <h3> {{ $t("OnlineShopping") }} <span> bi1</span></h3>
                <p>
                  {{ $t("AboutUsText") }}
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about_right">
                <div class="about_right_item">
                  <div class="items">
                    <img
                      src="~/assets/images/png/about-item1.png"
                      alt="Not Found"
                    />
                    <h5> {{ $t("HightQuality") }} </h5>
                  </div>
                </div>
                <div class="about_right_item">
                  <div class="items">
                    <img
                      src="~/assets/images/png/about-item2.png"
                      alt="Not Found"
                    />
                    <h5> {{ $t("WideRange") }} </h5>
                  </div>
                </div>
                <div class="about_right_item">
                  <div class="items">
                    <img
                      src="~/assets/images/png/about-item3.png"
                      alt="Not Found"
                    />
                    <h5> {{ $t("FastDelivery") }} </h5>
                  </div>
                </div>
                <div class="about_right_item">
                  <div class="items">
                    <img
                      src="~/assets/images/png/about-item4.png"
                      alt="Not Found"
                    />
                    <h5> {{$t("Discount&Stocks")}} </h5>
                  </div>
                </div>
              </div>
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