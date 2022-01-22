<template>
  <div class="header-top">
    <div class="container">
      <div class="header-top-wrapper">
        <a href="/" class="header-logo">
          <img src="~/assets/images/svg/logo.svg" alt="Logo" />
        </a>
        <div class="header-top-nav">
          <ul>
            <li>
              <nuxt-link to="about"> {{ $t("AboutCompany") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="how-to-order"> {{ $t("HowToOrder") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="our-stores"> {{ $t("OurStores") }}</nuxt-link>
            </li>
            <li>
              <a> {{ $t("CallBack") }}</a>
            </li>
          </ul>
        </div>
        <div class="log-in">
          <a @click="openNavbar" >
            <i class="icon-arrow-account"></i>
            <span> {{ $t("LogInAccount") }} </span>
          </a>
        </div>
        <div class="phone-call">
          <a href="#!">
            <i class="icon-phone-call-3-1"></i>
            + (992) 77777 4851
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: String,
      default() {
        return "AboutCompany";
      },
    },
  },
  methods: {
    openNavbar(){
       this.$store.commit("auth/openLog", true);
    }
  }
};
</script>

<style scoped >
/* .header-top {
  padding: 30px 0;
}

.header-top-wrapper {
  display: flex;
  align-items: center;
}

.header-logo {
  width: 228.24px;
  height: 50px;
}
.header-logo img {
  width: 228.24px;
  height: 50px;
}

.header-top-nav {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 60px;
}
.header-top-nav ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
}

.header-top-nav ul li a {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.log-in a {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
}

.log-in a i {
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: #ff9033;
  padding: 0 8px 0 0;
}

.phone-call {
  margin: 0 0 0 60px;
}

.phone-call a {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;
}

.phone-call a i {
  padding: 0 5px 0 0;
  color: #ff9033;
  margin: 0;
  font-size: 20px;
} */
</style>