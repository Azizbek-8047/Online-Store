<template>
  <div class="item">
    <div class="section__item">
      <div class="section__item__image">
        <img :src="image" alt="not found" />
      </div>
      <p>{{ about }}</p>
      <div class="section__item__footer">
        <div class="section__item__footer__left">
          <span class="money">
            {{ price }}
            <small>TJS.</small>
          </span>
          <span v-if="discount_price == 0 ? false : true"   class="discount_price">
            {{ discount_price }}
            <small>TJS.</small>
          </span>
        </div>
        <div class="section__item__footer__counter">
          <button @click="minus" class="minus">-</button>
          <span class="value"> {{ value }} </span>
          <button @click="plus" class="plus">+</button>
        </div>
        <button class="to_rubish">
          <i class="icon-arrow-basket"></i>
        </button>
      </div>
    </div>
    <div v-if="discount == 0 ? false : true" class="discount">
      <span>-{{ discount }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default() {
        return "";
      },
    },
    about: {
      type: String,
      default() {
        return "Aout Product";
      },
    },
    price: {
      type: Number,
      default() {
        return 0;
      },
    },
    discount_price: {
      type: Number,
      default() {
        return 0;
      },
    },
    discount: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data(){
    return {
      value: 1
    }
  },
  methods: {
    plus(){
      this.value++
    },
    minus(){
      this.value--
    }
  }
};
</script>

<style  >
.item {
  position: relative;
}

.discount {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
  left: 25px;
}

.discount span {
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
}

.section__item {
  background: #ffffff;
  box-shadow: 0px 0px 12px 3px rgb(56 56 56 / 5%);
  border-radius: 3px;
  padding: 25px;
  height: 340px;
  display: flex;
  flex-direction: column;
}

.section__item__image {
  width: 100%;
  height: 170px;
  margin-bottom: 10px;
}

.section__item__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  vertical-align: middle;
  border-style: none;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.section__item__footer {
  margin-top: auto;
  display: flex;
  align-items: center;
}

.section__item__footer__left {
  display: flex;
  flex-direction: column;
}

.money {
  display: flex;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  color: #ff9033;
}

.money small {
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  margin-left: 3px;
  text-transform: uppercase;
}

.section__item__footer__counter {
  max-width: 80px;
  flex: 0 0 80px;
  height: 36px;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
}

.section__item__footer__counter button {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #969696;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  background: transparent;
}

.section__item__footer__counter .minus {
  padding-left: 10px;
  padding-right: 5px;
}
.section__item__footer__counter .plus {
  padding-right: 10px;
  padding-left: 5px;
}

.section__item__footer__counter .value {
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #969696;
  user-select: none;
  padding: 0;
}

.section__item__footer .to_rubish {
  width: 50px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff9033;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  margin-left: 10px;
  color: #ffffff;
}

.discount_price {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #b1b1b1;
}
</style>