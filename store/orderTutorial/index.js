export const state = () => ({
    order_info: [
        {
            id: 1,
            title: "Регистрация",
            image: require("~/assets/images/svg/pc.svg"),
            text: `Зарегистрируйтесь в интернет-магазине, используя свой e-mail
                  или номер телефона`,
        },
        {
            id: 2,
            title: "Поиск",
            image: require("~/assets/images/svg/search.svg"),
            text: `Ищите необходимые товары, используя фильтр`,
        },
        {
            id: 3,
            title: "Корзина",
            image: require("~/assets/images/svg/groceries.svg"),
            text: `Поместите необходимое количество товара в корзину`,
        },
        {
            id: 4,
            title: "Оформление",
            image: require("~/assets/images/svg/contract.svg"),
            text: `Оформите и оплатите покупку и доставку банковской картой или
наличными `,
        },
    ],
})

export const getters = {
    getOrderInfo: state => state.order_info
}

export const mutations = {

}