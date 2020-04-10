<template>
  <form class="md-layout" @submit.prevent="submit">
    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="type">Ad Type</label>
        <md-select v-model="type" name="type" id="type">
          <md-option value="all">ALL</md-option>
          <md-option v-for="(t,i) in params.types" :key="i" :value="t">{{t | capitalize}}</md-option>
        </md-select>
      </md-field>
    </div>

    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="breed">Breed</label>
        <md-select v-model="breed" name="breed" id="breed">
          <md-option value="all">ALL</md-option>
          <md-option v-for="(t,i) in params.breeds" :key="i" :value="t">{{t | capitalize}}</md-option>
        </md-select>
      </md-field>
    </div>

    <div class="md-layout-item md-small-size-100">
      <md-button type="submit" class="md-primary md-raised">
        <md-icon>search</md-icon>Search
      </md-button>
    </div>
  </form>
</template>

<script>
import { db } from "../../main.js";
import filterMixin from "../../mixin/filterMixin.js";

export default {
  data() {
    return {
      type: "all",
      breed: "all",
      params: {
        breeds: [],
        types: []
      }
    };
  },
  firestore() {
    return {
      params: db.collection("params").doc("ad")
    };
  },
  methods: {
    submit() {
      this.$router
        .push({ name: "ads", params: { type: this.type, breed: this.breed } })
        .catch(() => console.log("You are already here"));
    }
  },
  mixins: [filterMixin]
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin-left: 8px;
  margin-right: 8px;
}
</style>