<template>
  <div class="section-products">
    <div class="container">
      <div class="swiper">
        <div class="products_nav">
          <h1> {{ $t("PopularProcudts") }} </h1>
          <div class="nav">
            <i class="icon-arrow-left-slide pop-pro-left " slot="button-prev"></i>
            <i class="icon-arrow-right-slide pop-pro-right " slot="button-next"></i>
          </div>
        </div>
        <div class="product-view">
          <swiper class="swiper" ref="swiper" :options="swiperOption">
            <swiper-slide v-for="item in getPopularPro" :key="item.id"
              ><CardProductCard
                :image="item.image"
                :about="item.about"
                :price="item.price"
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- <CardProductCard /> -->
  </div>
</template>

<script>
import { mapGetters } from  "vuex"
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-change-direction",
  title: "Change direction",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        // autoplay: {
        //   delay: 3000
        // },
        spaceBetween: 35,
        direction: "horizontal",
        navigation: {
          nextEl: ".pop-pro-right",
          prevEl: ".pop-pro-left",
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? "vertical" : "horizontal"
            );
          },
        },
      },
     
    };
  },
  computed: {
    ...mapGetters("landingPro", ["getPopularPro"])
  }
};
</script>

<style>

</style>