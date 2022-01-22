<template>
  <div class="section-products">
    <div class="container">
      <div class="swiper">
        <div class="products_nav">
          <h1> {{ $t("DiscountProcudts") }} </h1>
          <div class="nav">
            <i class="icon-arrow-left-slide discount-left " slot="button-prev"></i>
            <i class="icon-arrow-right-slide discount-right " slot="button-next"></i>
          </div>
        </div>
        <div class="product-view">
          <swiper class="swiper" ref="swiper" :options="swiperOption">
            <swiper-slide v-for="item in getDiscountPro" :key="item.id"
              ><CardProductCard
                :image="item.image"
                :about="item.about"
                :price="item.price"
                :discount="20"
                :discount_price="8.75"
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- <CardProductCard /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex"
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
        spaceBetween: 35,
        // autoplay: {
        //   delay: 5000,
        // },
        direction: "horizontal",
        navigation: {
          nextEl: ".discount-right",
          prevEl: ".discount-left",
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
    ...mapGetters("landingPro", ["getDiscountPro"]),
  },
};
</script>

<style>
</style>