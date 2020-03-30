<template>
  <md-card>
    <md-card-media>
      <img src="https://images.dog.ceo/breeds/shihtzu/n02086240_3175.jpg" alt="Dog" />
    </md-card-media>

    <md-card-header>
      <div class="md-title">Bobtail Boxer - 100lv</div>
      <div class="md-subhead">
        <md-icon>location_on</md-icon>Bulgaria |
        <md-icon>access_time</md-icon>27/03/2020 13:45
      </div>
    </md-card-header>
  </md-card>
</template>

<script>
export default {};
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