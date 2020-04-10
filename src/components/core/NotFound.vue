<template>
  <div class="md-layout md-alignment-top-center">
    <md-empty-state
      class="md-layout-item"
      md-icon="pets"
      md-label="404"
      md-description="Ooops... Looks like you are lost..."
    >
      <md-button to="/" class="md-raised md-primary">
        <md-icon>home</md-icon>Home
      </md-button>
      <md-button @click="$router.back()" class="md-raised md-primary">
        <md-icon>arrow_back_ios</md-icon>Back
      </md-button>
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>
