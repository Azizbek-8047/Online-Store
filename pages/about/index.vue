<template>
  <div class="about-page">
    <div class="container">
      <div class="pages-wrapper">
        <div class="pages-nav">
          <ul>
            <li class="pages-nav">
              <a href="/">{{ $t("Main") }}</a>
            </li>
            <li class="pages-nav active">
              <a href="#!"> {{ $t("AboutCompany") }} </a>
            </li>
          </ul>
        </div>
        <div class="about-company">
          <h2>{{ $t("AboutCompany") }}</h2>
          <p>
            <span>{{ $t("Shiver") }}</span> {{ $t("ShiverText") }}
          </p>
        </div>
        <div class="values">
          <h2>{{ $t("ValuesShiver") }}</h2>
          <div class="row values-min justify-content-between">
            <div class="col-lg-4">
              <div class="values-items">
                <div class="values-nav">
                  <h4>{{ $t("Independence") }}</h4>
                  <img
                    src="~/assets/images/svg/chain.svg"
                    alt="Not Found"
                    class="icons"
                  />
                </div>
                <div class="values-text">
                  {{ $t("IndependenceText") }}
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="values-items">
                <div class="values-nav">
                  <h4>{{ $t("Respect") }}</h4>
                  <img
                    src="~/assets/images/svg/contract.svg"
                    alt="Not Found"
                    class="icons"
                  />
                </div>
                <div class="values-text">
                  {{ $t("RespectText") }}
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="values-items">
                <div class="values-nav">
                  <h4>{{ $t("Energy") }}</h4>
                  <img
                    src="~/assets/images/svg/energy.svg"
                    alt="Not Found"
                    class="icons"
                  />
                </div>
                <div class="values-text">
                  {{ $t("EnergyText") }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="our-companies">
          <h2>{{ $t("OurBrands") }}</h2>
          <div class="row brands-items">
            <div class="col-lg-6">
              <div class="brands">
                <div class="image">
                  <img src="~/assets/images/svg/asha.svg" alt="Not Found" />
                </div>
                <p>
                  <span>{{ $t("Ashan") }}</span>
                  {{ $t("AshanText") }}
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="brands">
                <div class="image">
                  <img src="~/assets/images/svg/bi-1.svg" alt="Not Found" />
                </div>
                <p>
                  <span>{{ $t("Ashan") }}</span>
                  {{ $t("AshanText") }}
                </p>
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