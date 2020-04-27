<template>
  <div>
    <div v-if="!loading" class="md-layout md-alignment-top-center">
      <md-empty-state
        v-if="!followedAds.length"
        class="md-layout-item"
        md-icon="pets"
        md-label="You don't follow any ads"
        md-description="Go ahead and find some"
      >
        <md-button to="/" class="md-raised md-primary">
          <md-icon>home</md-icon>Home
        </md-button>
        <md-button @click="$router.back()" class="md-raised md-primary">
          <md-icon>arrow_back_ios</md-icon>Back
        </md-button>
      </md-empty-state>
      <md-list class="md-triple-line md-layout-item md-size-50 md-small-size-100">
        <md-list-item v-for="(ad,i) in followedAds" :key="i">
          <router-link class="img-container" :to="{name: 'details', params: {id:ad.id}}">
            <img :src="ad.imageUrl" />
          </router-link>
          <div class="md-list-item-text">
            <span>{{ad.title}}{{ad.price?` - ${ad.price} BGN`: ''}}</span>
            <span>{{ad.adType|capitalize}} | {{ad.breed|capitalize}} | {{ad.createdAt.toDate() | fromNow}}</span>
            <p>
              <router-link :to="{name: 'details', params: {id:ad.id}}">View</router-link>
            </p>
          </div>

          <md-button
            class="md-icon-button md-list-action"
            :to="{name: 'details', params: {id:ad.id}}"
          >
            <md-icon class="md-primary">visibility</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
import { db } from "../../main.js";
import filterMixin from "../../mixin/filterMixin.js";

export default {
  mixins: [filterMixin],
  data() {
    return {
      followedAds: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user: {
      immediate: true,
      handler(user) {
        if (user) {
          const { uid } = user;
          this.$store.commit("setLoading", true);
          this.$bind(
            "followedAds",
            db
              .collection("ads")
              .where("followedBy", "array-contains", uid)
              .orderBy("createdAt", "desc")
          )
            .then(() => this.$store.commit("setLoading", false))
            .catch(err => {
              console.log(err);
              this.$store.commit("setSnackbarText", err.message);
              this.$store.commit("setShowSnackbar", true);
            });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.img-container {
  width: 60px;
  min-width: 60px;
  height: 60px;
  margin-right: 3px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.md-subhead {
  .md-icon {
    $size: 16px;

    width: $size;
    min-width: $size;
    height: $size;
    font-size: $size !important;
  }
}
</style>