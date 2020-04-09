<template>
  <md-list>
    <md-list-item>
      <md-button to="/post-ad" class="md-raised md-primary">
        <md-icon>add</md-icon>Post Ad
      </md-button>
    </md-list-item>
    <md-list-item :to="{name: 'ads', params: {type:'all', breed: 'all'}}">
      <span class="md-list-item-text">Home</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', params: {type:'adoption', breed: 'all'}}">
      <span class="md-list-item-text">Adoption</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', params: {type:'sale', breed: 'all'}}">
      <span class="md-list-item-text">Sale</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', params: {type:'breeding', breed: 'all'}}">
      <span class="md-list-item-text">Breeding</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', params: {type:'wanted', breed: 'all'}}">
      <span class="md-list-item-text">Wanted</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', params: {type:'friendship', breed: 'all'}}">
      <span class="md-list-item-text">Friendship</span>
    </md-list-item>
  </md-list>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>