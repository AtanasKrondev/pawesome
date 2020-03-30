<template>
  <div>
    <app-ad-search></app-ad-search>
  <div class="md-layout md-alignment-top-left">
    <div class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <app-ad-card></app-ad-card>
    </div>
    <div class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <app-ad-card></app-ad-card>
    </div>
    <div class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <app-ad-card></app-ad-card>
    </div>
    <div class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <app-ad-card></app-ad-card>
    </div>
    <div class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <app-ad-card></app-ad-card>
    </div>
    <div class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <app-ad-card></app-ad-card>
    </div>
    <div class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <app-ad-card></app-ad-card>
    </div>
  </div>
  </div>
</template>

<script>
import AppAdCard from "./AdCard.vue";
import AppAdSearch from "./AdSearch.vue";
export default {
  components: {
    AppAdCard,
    AppAdSearch,
  }
};
</script>

<style lang="scss" scoped>

.md-layout-item {
  margin-top: 8px;
  margin-bottom: 8px;

  &:after {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>