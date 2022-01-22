<template>
  <div
    :class="{
      login_active: getOpenLog,
    }"
    class="wrapper"
  >
    <LayoutsHeader />
    <Nuxt />
    <LayoutsFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["getOpenLog"]),
  },
};
</script>

<style>
</style>