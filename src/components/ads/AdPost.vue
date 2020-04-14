<template>
  <div>
    <form class="md-layout md-alignment-top-center" @submit.prevent="submit">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Post your ad</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-alignment-top-left">
            <div class="md-layout-item md-size-100">
              <md-field :class="{'md-invalid':$v.form.title.$error}">
                <label for="title">Title</label>
                <md-input
                  name="title"
                  id="title"
                  type="text"
                  @blur="$v.form.title.$touch"
                  v-model="form.title"
                  maxlength="160"
                  required
                />
                <span class="md-error" v-if="!$v.form.title.required">Title is required</span>
                <span
                  class="md-error"
                  v-else-if="!$v.form.title.minLength||!$v.form.title.maxLength"
                >Title must be between 5 and 160 symbols</span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100">
              <md-field :class="{'md-invalid':$v.form.imageUrl.$error}">
                <label for="image-url">Image URL</label>
                <md-input
                  name="image-url"
                  id="image-url"
                  type="text"
                  @blur="$v.form.imageUrl.$touch"
                  v-model="form.imageUrl"
                  required
                />
                <span class="md-helper-text">Allowed extensions: *.png *.jpg *.jpeg *.gif</span>
                <span class="md-error" v-if="!$v.form.imageUrl.required">Image URL is required</span>
                <span class="md-error" v-if="!$v.form.imageUrl.imageUrl">Invalid URL format</span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100">
              <md-field :class="{'md-invalid':$v.form.description.$error}">
                <label for="description">Description</label>
                <md-textarea
                  name="description"
                  id="description"
                  md-autogrow
                  @blur="$v.form.description.$touch"
                  v-model="form.description"
                  maxlength="480"
                ></md-textarea>
                <span
                  class="md-error"
                  v-if="!$v.form.description.maxLength"
                >Description must be maximum 480 symbols</span>
                <span class="md-helper-text">Not mandatory, but it'll be useful for the others</span>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100">
              <md-field :class="{'md-invalid':$v.form.breed.$error}">
                <label for="breed">Breed</label>
                <md-select
                  v-model="form.breed"
                  @blur="$v.form.breed.$touch"
                  name="breed"
                  id="breed"
                  required
                >
                  <md-option v-for="(t,i) in params.breeds" :key="i" :value="t">{{t | capitalize}}</md-option>
                </md-select>
                <span class="md-error" v-if="!$v.form.breed.required">Breed is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="{'md-invalid':$v.form.adType.$error}">
                <label for="ad-type">Ad Type</label>
                <md-select
                  v-model="form.adType"
                  @blur="$v.form.adType.$touch"
                  name="ad-type"
                  id="ad-type"
                  required
                >
                  <md-option v-for="(t,i) in params.types" :key="i" :value="t">{{t | capitalize}}</md-option>
                </md-select>
                <span class="md-error" v-if="!$v.form.adType.required">Ad type is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="{'md-invalid':$v.form.price.$error}">
                <label for="price">Price (BGN)</label>
                <md-input
                  name="price"
                  id="price"
                  type="number"
                  v-model="form.price"
                  @blur="$v.form.price.$touch"
                />
                <span class="md-error" v-if="!$v.form.price.decimal">Price must be a number</span>
                <span
                  class="md-error"
                  v-else-if="!$v.form.price.minValue"
                >Price must be at least 0.01 BGN</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="{'md-invalid':$v.form.age.$error}">
                <label for="age">Age (years)</label>
                <md-input
                  name="age"
                  id="age"
                  type="number"
                  @blur="$v.form.age.$touch"
                  v-model="form.age"
                />
                <span class="md-error" v-if="!$v.form.age.decimal">Age must be a number</span>
                <span
                  class="md-error"
                  v-else-if="!$v.form.age.minValue"
                >Age can not be negative number</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="gender">Gender</label>
                <md-select v-model="form.gender" name="gender" id="gender">
                  <md-option value="male">Male</md-option>
                  <md-option value="female">Female</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="location">Location</label>
                <md-input name="location" id="location" type="text" v-model="form.location" />
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-switch
                v-model="form.pedigree"
                name="pedigree"
                id="pedigree"
                class="md-primary"
              >Pedigree</md-switch>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" :disabled="$v.$invalid" class="md-raised md-primary">
            <md-icon>add</md-icon>Post Ad
          </md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import { validationMixin } from "vuelidate";
import filterMixin from "../../mixin/filterMixin.js";
import {
  required,
  minLength,
  maxLength,
  helpers,
  minValue,
  decimal
} from "vuelidate/lib/validators";
import { db } from "../../main.js";

const imageUrl = helpers.regex(
  "imageUrl",
  /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/
);

export default {
  name: "AdPost",
  data() {
    return {
      form: {
        title: null,
        imageUrl: null,
        description: null,
        adType: null,
        price: null,
        breed: null,
        age: null,
        gender: null,
        location: null,
        pedigree: false
      },
      params: {
        breeds: [],
        types: []
      }
    };
  },
  methods: {
    submit() {
      const authorId = this.user.uid;
      const authorName = this.user.displayName;
      const authorPhoto = this.user.photoURL;
      const createdAt = firebase.firestore.FieldValue.serverTimestamp();
      db.collection("ads")
        .add({ authorId, authorName, authorPhoto, createdAt, ...this.form })
        .then(() => this.$router.back())
        .catch(err => console.log(err));
    }
  },
  firestore() {
    return {
      params: db.collection("params").doc("ad")
    };
  },
  mixins: [validationMixin, filterMixin],
  validations: {
    form: {
      title: { required, minLength: minLength(5), maxLength: maxLength(160) },
      imageUrl: { required, imageUrl },
      description: { maxLength: maxLength(480) },
      adType: { required },
      price: { decimal, minValue: minValue(0.01) },
      breed: { required },
      age: { decimal, minValue: minValue(0) }
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin-left: 8px;
  margin-right: 8px;
}
.md-button {
  width: 100%;
}
.md-option {
  background: pink;
}
</style>