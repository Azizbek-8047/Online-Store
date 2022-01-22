<template>
  <div class="how-to-order">
    <div class="container">
      <div class="pages-wrapper">
        <div class="pages-nav">
          <ul>
            <li class="pages-nav"><a href="/">Main</a></li>
            <li class="pages-nav active">
              <a href="#!"> {{ $t("HowToOrder") }} </a>
            </li>
          </ul>
        </div>
        <div class="how-to-order-info">
          <h2>{{ $t("HowToOrder") }}</h2>
          <div class="row">
            <div class="col-lg-6" v-for="info in getOrderInfo" :key="info.id">
              <div class="how_order_items">
                <div class="nav">
                  <h3>
                    <span v-if="info.id <= 9"> 0{{ info.id }}. </span>
                    <span v-if="info.id > 9"> {{ info.id }}. </span>
                    {{ info.title }}
                  </h3>
                  <img :src="info.image" alt="" />
                </div>
                <p>
                  {{ info.text }}
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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters("orderTutorial", ["getOrderInfo"])
  }
};
</script>

<style>
</style>