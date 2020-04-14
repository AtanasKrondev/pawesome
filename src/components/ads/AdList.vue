<template>
  <div>
    <md-progress-bar v-if="loading" md-mode="indeterminate" class="md-accent"></md-progress-bar>
    <app-ad-search v-if="!loading"></app-ad-search>
    <p class="md-caption">
      {{loading?'Searching for':'Showing'}}
      <span v-if="!$route.query.type &&!$route.query.breed">all</span>
      <span v-else>{{$route.query.type || ''}} {{$route.query.breed || ''}}</span> ads
    </p>
    <div v-if="!loading" class="md-layout md-alignment-top-left">
      <md-empty-state
        v-if="!ads.length"
        class="md-layout-item"
        md-icon="pets"
        md-label="No ads found"
        md-description="You can post the first ad in this category"
      >
        <md-button to="/post-ad" class="md-raised md-primary">
          <md-icon>add</md-icon>Post Ad
        </md-button>
        <md-button @click="$router.back()" class="md-raised md-primary">
          <md-icon>arrow_back_ios</md-icon>Back
        </md-button>
      </md-empty-state>
      <div
        v-for="a in ads"
        :key="a.id"
        class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <app-ad-card :ad="a"></app-ad-card>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../main.js";
import AppAdCard from "./AdCard.vue";
import AppAdSearch from "./AdSearch.vue";

export default {
  name: "AdList",
  components: {
    AppAdCard,
    AppAdSearch
  },
  data() {
    return { ads: [], loading: false };
  },
  watch: {
    "$route.query": {
      immediate: true,
      handler({ type, breed }) {
        this.loading = true;
        if (!type && !breed) {
          this.$bind(
            "ads",
            db.collection("ads").orderBy("createdAt", "desc")
          ).then(() => (this.loading = false));
        } else if (!breed) {
          this.$bind(
            "ads",
            db
              .collection("ads")
              .where("adType", "==", type)
              .orderBy("createdAt", "desc")
          ).then(() => (this.loading = false));
        } else if (!type) {
          this.$bind(
            "ads",
            db
              .collection("ads")
              .where("breed", "==", breed)
              .orderBy("createdAt", "desc")
          ).then(() => (this.loading = false));
        } else {
          this.$bind(
            "ads",
            db
              .collection("ads")
              .where("breed", "==", breed)
              .where("adType", "==", type)
              .orderBy("createdAt", "desc")
          ).then(() => (this.loading = false));
        }
      }
    }
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