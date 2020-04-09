<template>
  <div class="md-layout md-alignment-top-center">
    <md-card class="md-layout-item md-size-75 md-small-size-100">
      <md-card-header>
        <div class="md-title">...<md-icon>pets</md-icon>...<md-icon>pets</md-icon>...<md-icon>pets</md-icon>...<md-icon>pets</md-icon>...</div>
        <div class="md-title">...404...</div>
        <div class="md-title">Ooops... Looks like you are lost...</div>
      </md-card-header>
      <md-card-actions>
        <md-button @click="$router.back()" class="md-raised md-primary"><md-icon>arrow_back_ios</md-icon>Back</md-button>
        <md-button to="/" class="md-raised md-primary"><md-icon>home</md-icon>Home</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>
