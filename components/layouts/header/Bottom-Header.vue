<template>
  <div class="header-bottom">
    <div class="container">
      <div class="header-bottom-wrapper">
        <div class="header-bottom-catalog">
          <div class="catalog-text">
            <a href="#!">
              <i class="icon-menu"></i>
              {{ $t("CatalogProduct") }}
            </a>
          </div>
          <LayoutsHeaderCatalog />
        </div>
        <div class="header-bottom-search">
          <input :placeholder="$t('Search')" type="text" />
          <button>
            <i class="icon-arrow-search-product"></i>
          </button>
        </div>
        <div class="header-bottom-lang">
          <LayoutsHeaderLang />
        </div>
        <!-- <div class="product-liked">
          <i class="icon-arrow-wishes"></i>
          <div class="liked">
            <span> {{ $t("ProductList") }} </span>
            <div class="liked_num">
              {{ num_liked }}
              {{ $t("NumberProducts") }}
            </div>
          </div>
        </div> -->
        <div class="product-basket">
          <i class="icon-arrow-basket"></i>
          <div class="basket">
            <span> {{ product_price }} TJS </span>
            <span class="basket_num">
              {{ num_basket }}
              {{ $t("NumberProducts") }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num_liked: 5,
      num_basket: 0,
      product_price: 0,
    };
  },
};
</script>

<style>
.catalog-text {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.catalog-text a {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin: 0;
  padding: 0;
}

.catalog-text a i {
  margin: 0 24px 0 0;
  padding: 0;
}

</style>