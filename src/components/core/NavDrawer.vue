<template>
  <md-list>
    <md-list-item>
      <md-button to="/post-ad" class="md-raised md-primary">
        <md-icon>add</md-icon>Post Ad
      </md-button>
    </md-list-item>
    <md-list-item :to="{name: 'ads'}">
      <span class="md-list-item-text">Home</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', query: {type:'adoption'}}">
      <span class="md-list-item-text">Adoption</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', query: {type:'sale'}}">
      <span class="md-list-item-text">Sale</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', query: {type:'breeding'}}">
      <span class="md-list-item-text">Breeding</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', query: {type:'wanted'}}">
      <span class="md-list-item-text">Wanted</span>
    </md-list-item>
    <md-list-item :to="{name: 'ads', query: {type:'friendship'}}">
      <span class="md-list-item-text">Friendship</span>
    </md-list-item>
  </md-list>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>