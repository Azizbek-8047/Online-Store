export const state = () => ({
    new_products: [
        {
          id: 1,
          image: require("~/assets/images/png/product1.png"),
          about: `Печенье Orion Choco-Pie, 360 гр`,
          price: 19.4,
        },
        {
          id: 2,
          image: require("~/assets/images/png/product2.png"),
          about: `Кофе Jacobs Gold, 95 гр`,
          price: 19.4,
        },
        {
          id: 3,
          image: require("~/assets/images/png/product3.png"),
          about: `Шоколадная плитка Nesquik молочная, 100 гр`,
          price: 19.4,
        },
        {
          id: 4,
          image: require("~/assets/images/png/product4.png"),
          about: `еченье Orion Choco-Pie, 360 гр`,
          price: 19.4,
        },
        {
          id: 5,
          image: require("~/assets/images/png/product1.png"),
          about: `Печенье Orion Choco-Pie, 360 гр`,
          price: 19.4,
        },
        {
          id: 6,
          image: require("~/assets/images/png/product2.png"),
          about: `Кофе Jacobs Gold, 95 гр`,
          price: 19.4,
        },
        {
          id: 7,
          image: require("~/assets/images/png/product3.png"),
          about: `Шоколадная плитка Nesquik молочная, 100 гр`,
          price: 19.4,
        },
        {
          id: 8,
          image: require("~/assets/images/png/product4.png"),
          about: `еченье Orion Choco-Pie, 360 гр`,
          price: 19.4,
        },
      ],
      discount_products: [
        {
          id: 1,
          image: require("~/assets/images/png/discount-product1.png"),
          about: `Напиток Coca-Cola без сахара, 1.75 лр`,
          price: 19.4,
          discount_perc: 25,
          first_price: 8.75,
        },
        {
          id: 2,
          image: require("~/assets/images/png/discount-product2.png"),
          about: `Энергетический напиток RedBull, 0.35 л`,
          price: 19.4,
          discount_perc: 25,
          first_price: 8.75,
        },
        {
          id: 3,
          image: require("~/assets/images/png/discount-product3.png"),
          about: `Подгузники Libero Newborn 2 размер, 24 шт`,
          price: 19.4,
          discount_perc: 25,
          first_price: 8.75,
        },
        {
          id: 4,
          image: require("~/assets/images/png/dicount-product4.png"),
          about: `Драже М&М’s с арахисом, 30 гр`,
          price: 19.4,
          discount_perc: 25,
          first_price: 8.75,
        },
        {
          id: 5,
          image: require("~/assets/images/png/product1.png"),
          about: `Печенье Orion Choco-Pie, 360 гр`,
          price: 19.4,
          discount_perc: 25,
          first_price: 8.75,
        },
        {
          id: 6,
          image: require("~/assets/images/png/product2.png"),
          about: `Кофе Jacobs Gold, 95 гр`,
          price: 19.4,
          discount_perc: 25,
          first_price: 8.75,
        },
        {
          id: 7,
          image: require("~/assets/images/png/product3.png"),
          about: `Шоколадная плитка Nesquik молочная, 100 гр`,
          price: 19.4,
          discount_perc: 25,
          first_price: 8.75,
        },
        {
          id: 8,
          image: require("~/assets/images/png/product4.png"),
          about: `еченье Orion Choco-Pie, 360 гр`,
          price: 19.4,
          discount_perc: 25,
          first_price: 8.75,
        },
      ],
      popular_products: [
        {
          id: 1,
          image: require("~/assets/images/png/product1.png"),
          about: `Печенье Orion Choco-Pie, 360 гр`,
          price: 19.4,
        },
        {
          id: 2,
          image: require("~/assets/images/png/product2.png"),
          about: `Кофе Jacobs Gold, 95 гр`,
          price: 19.4,
        },
        {
          id: 3,
          image: require("~/assets/images/png/product3.png"),
          about: `Шоколадная плитка Nesquik молочная, 100 гр`,
          price: 19.4,
        },
        {
          id: 4,
          image: require("~/assets/images/png/product4.png"),
          about: `еченье Orion Choco-Pie, 360 гр`,
          price: 19.4,
        },
        {
          id: 5,
          image: require("~/assets/images/png/product1.png"),
          about: `Печенье Orion Choco-Pie, 360 гр`,
          price: 19.4,
        },
        {
          id: 6,
          image: require("~/assets/images/png/product2.png"),
          about: `Кофе Jacobs Gold, 95 гр`,
          price: 19.4,
        },
        {
          id: 7,
          image: require("~/assets/images/png/product3.png"),
          about: `Шоколадная плитка Nesquik молочная, 100 гр`,
          price: 19.4,
        },
        {
          id: 8,
          image: require("~/assets/images/png/product4.png"),
          about: `еченье Orion Choco-Pie, 360 гр`,
          price: 19.4,
        },
      ],
})

export const getters = {
    getNewPro: state => state.new_products,
    getDiscountPro: state => state.discount_products,
    getPopularPro: state => state.popular_products,
}

export const mutations = {

}