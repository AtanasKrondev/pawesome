<template>
  <form novalidate class="md-layout" @submit.prevent="submit">
    <div class="md-layout-item">
      <md-field>
        <label for="ad-type">Ad Type</label>
        <md-select v-model="adType" name="ad-type" id="ad-type">
          <md-option value="any">(Any)</md-option>
          <md-option value="adoption">Adoption</md-option>
          <md-option value="sale">Sale</md-option>
          <md-option value="breeding">Breeding</md-option>
          <md-option value="wanted">Pet Wanted</md-option>
          <md-option value="friendship">Friendship</md-option>
        </md-select>
      </md-field>
    </div>

    <div class="md-layout-item">
      <md-autocomplete v-model="breed" :md-options="breeds" name="breed" id="breed">
        <label for="breed">Breed</label>

        <template slot="md-autocomplete-item" slot-scope="{ item, term }">
          <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
        </template>

        <template slot="md-autocomplete-empty">No result</template>
      </md-autocomplete>
    </div>

    <div class="md-layout-item">
      <md-autocomplete v-model="location" :md-options="locations" name="location" id="location">
        <label for="location">Locations</label>

        <template slot="md-autocomplete-item" slot-scope="{ item, term }">
          <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
        </template>

        <template slot="md-autocomplete-empty">No result</template>
      </md-autocomplete>
    </div>

    <div class="md-layout-item">
      <md-button type="submit" class="md-primary md-raised">Search</md-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      adType: null,
      breed: null,
      location: null,
      breeds: [
        "(Any)",
        "husky",
        "keeshond",
        "kelpie",
        "komondor",
        "kuvasz",
        "labrador",
        "leonberg",
        "lhasa",
        "malamute",
        "malinois",
        "maltese"
      ],
      locations: [
        "(Any)",
        "Algeria",
        "Argentina",
        "Brazil",
        "Canada",
        "Italy",
        "Japan",
        "United Kingdom",
        "United States"
      ]
    };
  },
  methods: {
    submit() {
      alert(`${this.adType}, ${this.breed}, ${this.location}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin-left: 8px;
  margin-right: 8px;
}
</style>