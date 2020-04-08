<template>
  <form novalidate class="md-layout" @submit.prevent="submit">
    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="type">Ad Type</label>
        <md-select v-model="type" name="type" id="type">
          <md-option v-for="(t,i) in params.types" :key="i" :value="t">{{t | capitalize}}</md-option>
        </md-select>
      </md-field>
    </div>

    <div class="md-layout-item md-small-size-100">
      <md-field>
        <label for="breed">Breed</label>
        <md-select v-model="breed" name="breed" id="breed">
          <md-option v-for="(t,i) in params.breeds" :key="i" :value="t">{{t | capitalize}}</md-option>
        </md-select>
      </md-field>
    </div>

    <div class="md-layout-item md-small-size-100">
      <md-button type="submit" class="md-primary md-raised">Search</md-button>
    </div>
  </form>
</template>

<script>
import { db } from "../../main.js";
import filterMixin from "../../mixin/filterMixin.js";

export default {
  data() {
    return {
      type: null,
      breed: null,
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
      alert(this.breed);
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