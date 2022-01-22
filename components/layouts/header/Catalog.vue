<template>
    <div class="menu_bar">
      <ul>
        <LayoutsHeaderRecursive-Menu
          v-for="item in menu_list"
          :key="item.id"
          :menuItem="item"
        />
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu_list: [
        {
          id: 1,
          title: "Соленые закуски",
          children: [
            {
              id: 1,
              title: "Соленые 1",
              children: [
                {
                  id: 1,
                  title: "Соленые 1",
                  children: [],
                },
                {
                  id: 2,
                  title: "Соленые 2",
                  children: [],
                },
                {
                  id: 3,
                  title: "Соленые 3",
                  children: [],
                },
              ],
            },
            {
              id: 2,
              title: "Соленые 2",
              children: [],
            },
            {
              id: 3,
              title: "Соленые 3",
              children: [],
            },
          ],
        },
        {
          id: 2,
          title: "Горячие напитки",
          children: [
            {
              id: 1,
              title: "Соленые 1",
              children: [
                {
                  id: 1,
                  title: "Соленые 1",
                  children: [],
                },
                {
                  id: 2,
                  title: "Соленые 2",
                  children: [],
                },
                {
                  id: 3,
                  title: "Соленые 3",
                  children: [],
                },
              ],
            },
            {
              id: 2,
              title: "Соленые 2",
              children: [],
            },
            {
              id: 3,
              title: "Соленые 3",
              children: [],
            },
          ],
        },
        {
          id: 3,
          title: "Сладости",
          children: [
            {
              id: 1,
              title: "Соленые 1",
              children: [
                {
                  id: 1,
                  title: "Соленые 1",
                  children: [],
                },
                {
                  id: 2,
                  title: "Соленые 2",
                  children: [],
                },
                {
                  id: 3,
                  title: "Соленые 3",
                  children: [],
                },
              ],
            },
            {
              id: 2,
              title: "Соленые 2",
              children: [],
            },
            {
              id: 3,
              title: "Соленые 3",
              children: [],
            },
          ],
        },
        {
          id: 4,
          title: "Вода и напитки",
          children: [
            {
              id: 1,
              title: "Соленые 1",
              children: [],
            },
            {
              id: 2,
              title: "Соленые 2",
              children: [],
            },
            {
              id: 3,
              title: "Вода 3",
              children: [],
            },
          ],
        },
        {
          id: 5,
          title: "Все для детей",
          children: [
            {
              id: 1,
              title: "детей 1",
              children: [],
            },
            {
              id: 2,
              title: "детей 2",
              children: [],
            },
            {
              id: 3,
              title: "детей 3",
              children: [],
            },
          ],
        },
        {
          id: 6,
          title: "Для животных",
          children: [
            {
              id: 1,
              title: "животных 1",
              children: [],
            },
            {
              id: 2,
              title: "животных 2",
              children: [],
            },
            {
              id: 3,
              title: "животных 3",
              children: [],
            },
          ],
        },
        {
          id: 7,
          title: "Спиртные напитки",
          children: [
            {
              id: 1,
              title: "Спиртные 1",
              children: [],
            },
            {
              id: 2,
              title: "Спиртные 2",
              children: [],
            },
            {
              id: 3,
              title: "Спиртные 3",
              children: [],
            },
          ],
        },
      ],
      isActive: false,
    };
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style  >

.menu_bar {
  background: #ffffff;
  box-shadow: 0px 0px 12px 3px rgb(56 56 56 / 5%);
  border-radius: 3px;
  top: 100%;
  z-index: 1;
  left: 0;
  transform: translateY(0%);
  transition: all 0.3s ease-in-out;
  width: 240px;
  position: absolute;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.menu_bar i {
  color: #FF9033;
}

.menu_bar li {
  padding: 0 25px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.menu_bar > ul > li > a {
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #372e2e;
  position: relative;
  padding-right: 10px;
  width: 190px;
  padding: 21px 0;
  margin-top: -1px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu_bar li > ul {
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  box-shadow: 0px 0px 12px 3px rgb(56 56 56 / 5%);
  background: #ffffff;
}

.menu_bar li:hover > ul {
  display: block;
}

.menu_bar li > ul > li {
  padding: 0 25px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.menu_bar li > ul > li > a {
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #372e2e;
  position: relative;
  padding-right: 10px;
  width: 190px;
  padding: 21px 0;
  margin-top: -1px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
