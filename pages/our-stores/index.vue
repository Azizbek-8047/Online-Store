<template>
  <div class="our-stores">
    <div class="container">
      <div class="pages-wrapper">
        <div class="pages-nav">
          <ul>
            <li class="pages-nav"><a href="/">Main</a></li>
            <li class="pages-nav active">
              <a href="#!"> {{ $t("OurStores") }}</a>
            </li>
          </ul>
        </div>
        <div class="our-stores-info">
          <h2>Наши магазины</h2>
          <div class="shops__main ">
            <div class="shops__main__item" v-for="item in stores" :key="item.id" >
              <div class="shops__main__item__image">
                <img
                  :src="item.image"
                  alt="not found"
                />
              </div>
              <h3> {{item.title}} </h3>
              <ul>
                <li>
                  <span>Адрес:</span><small>  {{item.adress}} </small>
                </li>
                <li>
                  <span>Телефон:</span><a href="tel:info.num"> {{item.phone}} </a>
                </li>
                <li>
                  <span>График работы:</span
                  ><small> {{item.timeTable}} </small>
                </li>
              </ul>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11985.899531254348!2d69.29966155!3d41.32028595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1621681841368!5m2!1sru!2s"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
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
      stores: [
        {
          id: 1,
          image: require("~/assets/images/svg/our-stores-asha.svg"),
          title: "Супермаркет Би1 Спарта",
          adress: "Душанбе, ул. Бехзод 47",
          num: '+992488884000',
          phone: "+(992) 488-88-40-00",
          timeTable: "Пн.-Вс. с 09:00 до 20:00",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11985.899531254348!2d69.29966155!3d41.32028595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1621681841368!5m2!1sru!2s",
        },
        {
          id: 2,
          image: require("~/assets/images/svg/our-stores-bi-1.svg"),
          title: "Супермаркет Би1 Испечак",
          adress: "Душанбе, ул. Бехзод 47",
          num: '+992488884000',
          phone: "+(992) 488-88-40-00",
          timeTable: "Пн.-Вс. с 09:00 до 20:00",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11985.899531254348!2d69.29966155!3d41.32028595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1621681841368!5m2!1sru!2s",
        },
        {
          id: 3,
          image: require("~/assets/images/svg/our-stores-bi-1.svg"),
          title: "Супермаркет Би1 Спарта",
          num: '+992488884000',
          adress: "Душанбе, ул. Бехзод 47",
          phone: "+(992) 488-88-40-00",
          timeTable: "Пн.-Вс. с 09:00 до 20:00",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11985.899531254348!2d69.29966155!3d41.32028595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1621681841368!5m2!1sru!2s",
        },
        {
          id: 4,
          image: require("~/assets/images/svg/our-stores-bi-1.svg"),
          title: "Супермаркет Би1 Спарта",
          num: '+992488884000',
          adress: "Душанбе, ул. Бехзод 47",
          phone: "+(992) 488-88-40-00",
          timeTable: "Пн.-Вс. с 09:00 до 20:00",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11985.899531254348!2d69.29966155!3d41.32028595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1621681841368!5m2!1sru!2s",
        },
      ],
    };
  },
};
</script>

<style>
</style>