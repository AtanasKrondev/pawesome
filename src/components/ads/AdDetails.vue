<template>
  <div>
    <md-progress-bar v-if="loading" md-mode="indeterminate" class="md-accent"></md-progress-bar>
    <template v-else>
      <p v-if="noResult" class="md-subheading">Ad does not exist</p>
      <div v-else class="md-layout md-alignment-top-center">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">{{ad.title}}{{ad.price?` - ${ad.price} BGN`: ''}}</div>
            <div class="md-subhead">
              <span v-if="ad.location">
                <md-icon>location_on</md-icon>
                {{ad.location}}
              </span>
              <span v-if="ad.createdAt">
                <md-icon>access_time</md-icon>
                {{ad.createdAt.toDate() | localeDate}}
              </span>
            </div>
          </md-card-header>
          <md-card-media>
            <img :src="ad.imageUrl" :alt="ad.title" />
          </md-card-media>
          <md-card-content>{{ad.description}}</md-card-content>
        </md-card>
        <md-card class="md-layout-item md-size-40 md-small-size-100">
          <md-card-header>
            <md-avatar v-if="ad.authorPhoto">
              <img :src="ad.authorPhoto" />
            </md-avatar>
            <md-avatar v-else class="md-avatar-icon">
              <md-icon>account_circle</md-icon>
            </md-avatar>

            <div class="md-title">{{ad.authorName || 'Anonimous'}}</div>
            <div class="md-subhead">
              <md-icon>location_on</md-icon>
              {{ad.location}}
            </div>
          </md-card-header>
          <md-card-actions md-alignment="left">
            <md-button class="md-raised md-primary">
              <md-icon>bookmark</md-icon>Save Ad
            </md-button>
            <md-button class="md-raised md-primary">
              <md-icon>chat</md-icon>Contact
            </md-button>
          </md-card-actions>
          <md-card-content>
            <md-list>
              <md-list-item>
                <span class="md-body-2">Ad Type:</span>
                {{ad.adType | capitalize}}
              </md-list-item>
              <md-list-item>
                <span class="md-body-2">Breed:</span>
                {{ad.breed | capitalize}}
              </md-list-item>
              <md-list-item>
                <span class="md-body-2">Location</span>
                {{ad.location || '-'}}
              </md-list-item>
              <md-list-item>
                <span class="md-body-2">Pedigree</span>
                {{ad.pedigree? 'Yes': 'No'}}
              </md-list-item>
              <md-list-item>
                <span class="md-body-2">Age</span>
                {{ad.age?`${ad.age} years`:'-'}}
              </md-list-item>
              <md-list-item>
                <span class="md-body-2">Gender</span>
                {{ad.gender | capitalize}}
              </md-list-item>
            </md-list>
          </md-card-content>
        </md-card>
      </div>
    </template>
  </div>
</template>

<script>
import { db } from "../../main.js";
import filterMixin from "../../mixin/filterMixin.js";

export default {
  name: "AdDetails",
  data() {
    return {
      ad: {},
      loading: false,
      noResult: false
    };
  },
  // firestore() {
  //   return {
  //     ad: db.collection("ads").doc(this.$route.params.id)
  //   };
  // },
  watch: {
    "$route.params": {
      immediate: true,
      handler({ id }) {
        this.loading = true;
        this.noResult = false;
        this.$bind("ad", db.collection("ads").doc(id)).then(doc => {
          this.loading = false;
          if (!doc) {
            this.noResult = true;
          }
        });
      }
    }
  },
  mixins: [filterMixin]
};
</script>

<style lang="scss" scoped>
.md-subhead {
  .md-icon {
    $size: 16px;

    width: $size;
    min-width: $size;
    height: $size;
    font-size: $size !important;
  }
}

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