<template>
  <md-card>
    <md-card-media>
      <router-link :to="{name: 'details', params: {id:ad.id}}">
        <img :src="ad.imageUrl" :alt="ad.title" />
      </router-link>
    </md-card-media>

    <md-card-header>
      <div class="md-title">{{ad.title}}{{ad.price?` - ${ad.price} BGN`: ''}}</div>
      <div class="md-subhead">
        <span v-if="ad.location">
          <md-icon>location_on</md-icon>
          {{ad.location}}
        </span>
        <span v-if="ad.createdAt">
          <md-icon>access_time</md-icon>
          {{ad.createdAt.toDate()}}
        </span>
      </div>
      <router-link :to="{name: 'details', params: {id:ad.id}}">View More...</router-link>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  props: {
    ad: Object
  }
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
</style>