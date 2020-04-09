<template>
  <div>
    <app-ad-search></app-ad-search>
    <md-progress-bar v-if="loading" md-mode="indeterminate" class="md-accent"></md-progress-bar>
    <div v-else class="md-layout md-alignment-top-left">
      <p v-if="noResult" class="md-subheading">No ads found</p>
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
    return { ads: [], loading: false, noResult: false };
  },
  watch: {
    "$route.params": {
      immediate: true,
      handler({ type, breed }) {
        this.loading = true;
        this.noResult = false;
        if (type === "all" && breed === "all") {
          this.$bind(
            "ads",
            db.collection("ads").orderBy("createdAt", "desc")
          ).then(doc => {
            this.loading = false;
            if (!doc.length) {
              this.noResult = true;
            }
          });
        } else if (breed === "all") {
          this.$bind(
            "ads",
            db
              .collection("ads")
              .where("adType", "==", type)
              .orderBy("createdAt", "desc")
          ).then(doc => {
            this.loading = false;
            if (!doc.length) {
              this.noResult = true;
            }
          });
        } else if (type === "all") {
          this.$bind(
            "ads",
            db
              .collection("ads")
              .where("breed", "==", breed)
              .orderBy("createdAt", "desc")
          ).then(doc => {
            this.loading = false;
            if (!doc.length) {
              this.noResult = true;
            }
          });
        } else {
          this.$bind(
            "ads",
            db
              .collection("ads")
              .where("breed", "==", breed)
              .where("adType", "==", type)
              .orderBy("createdAt", "desc")
          ).then(doc => {
            this.loading = false;
            if (!doc.length) {
              this.noResult = true;
            }
          });
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