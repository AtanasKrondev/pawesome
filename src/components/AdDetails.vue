<template>
  <div class="md-layout md-alignment-top-center">
    <md-card class="md-layout-item md-size-50 md-xsmall-size-100">
      <md-card-header>
        <div class="md-title">Bobtail Boxer - 100lv</div>
        <div class="md-subhead">
          <md-icon>location_on</md-icon> Bulgaria | 
          <md-icon>access_time</md-icon> 27/03/2020 13:45
        </div>
      </md-card-header>
      <md-card-media>
        <img src="https://images.dog.ceo/breeds/boxer/n02108089_2482.jpg" alt="Boxer" />
      </md-card-media>
      <md-card-content>Mnogo hubav kucho</md-card-content>
    </md-card>
    <md-card class="md-layout-item md-size-25 md-xsmall-size-100">
      <md-card-header>
        <md-avatar>
          <img src="https://images.dog.ceo/breeds/boxer/n02108089_11687.jpg" alt="User" />
        </md-avatar>

        <div class="md-title">Boxer breeder 69</div>
        <div class="md-subhead">
          <md-icon>location_on</md-icon> Bulgaria
        </div>
      </md-card-header>
      <md-card-actions md-alignment="left">
        <md-button class="md-raised md-primary">
          <md-icon>star</md-icon> Save Ad
        </md-button>
        <md-button class="md-raised md-primary">
          <md-icon>chat</md-icon> Contact
        </md-button>
      </md-card-actions>
      <md-card-content>
        <md-list>
          <md-list-item>
            <span class="md-body-2">Ad Type:</span>Sell
          </md-list-item>
          <md-list-item>
            <span class="md-body-2">Breed:</span>Boxer
          </md-list-item>
          <md-list-item>
            <span class="md-body-2">Location</span>Bulgaria
          </md-list-item>
          <md-list-item>
            <span class="md-body-2">Pedigree</span>Yes
          </md-list-item>
          <md-list-item>
            <span class="md-body-2">Age</span>3 years
          </md-list-item>
          <md-list-item>
            <span class="md-body-2">Gender</span>Male
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  </div>
</template>

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