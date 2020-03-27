<template>
  <div>
    <app-ad-search></app-ad-search>
    <app-ad-list></app-ad-list>
  </div>
</template>

<script>
import AppAdList from "../AdList.vue";
import AppAdSearch from "../AdSearch.vue";

export default {
  components: {
    AppAdList,
    AppAdSearch
  }
};
</script>

<style lang="scss" scoped>
</style>