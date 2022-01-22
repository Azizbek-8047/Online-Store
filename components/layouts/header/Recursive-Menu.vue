<template>
  <li>
    <nuxt-link to="/">
      {{ menuItem.title }}
      <i
        v-if="menuItem && menuItem.children && menuItem.children.length"
        class="icon-arrow-right"
      ></i>
    </nuxt-link>
    <ul v-if="menuItem && menuItem.children && menuItem.children.length">
      <Recursive-Menu
        v-for="child in menuItem.children"
        :key="child.id"
        :menuItem="child"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: "Recursive-Menu",
  props: {
    menuItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      show: 0,
    };
  },
};
</script>

<style >

</style>