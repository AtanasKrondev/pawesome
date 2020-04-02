<template>
  <div class="md-layout md-alignment-top-center">
    <md-tabs md-alignment="fixed" class="md-layout-item md-size-50 md-small-size-100">
      <md-tab id="tab-profile" md-label="Profile">
        <md-card>
          <md-card-header>
            <div class="md-title">Name and Photo</div>
          </md-card-header>
          <form @submit.prevent="updateProfile">
            <md-card-content>
              <md-field :class="{'md-invalid':$v.profile.displayName.$error}">
                <label for="display-name">Display Name</label>
                <md-input
                  v-model="profile.displayName"
                  @blur="$v.profile.displayName.$touch"
                  type="text"
                  name="display-name"
                  id="display-name"
                  required
                ></md-input>
                <span
                  class="md-error"
                  v-if="!$v.profile.displayName.required"
                >Display name is required</span>
                <span
                  class="md-error"
                  v-else-if="!$v.profile.displayName.minLength||!$v.profile.displayName.maxLength"
                >Name must be between 3 and 24 symbols</span>
              </md-field>
              <md-field :class="{'md-invalid':$v.profile.photoURL.$error}">
                <label for="photo-url">Photo URL</label>
                <md-input
                  v-model="profile.photoURL"
                  @blur="$v.profile.photoURL.$touch"
                  type="text"
                  name="photo-url"
                  id="photo-url"
                  required
                ></md-input>
                <span class="md-helper-text">Allowed extensions: *.png *.jpg *.jpeg *.gif</span>
                <span class="md-error" v-if="!$v.profile.photoURL.required">Photo URL is required</span>
                <span class="md-error" v-if="!$v.profile.photoURL.photoURL">Invalid URL format</span>
              </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button
                type="submit"
                :disabled="$v.profile.$invalid"
                class="md-raised md-primary"
              >Update Profile</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </md-tab>

      <md-tab id="tab-email" md-label="Email">
        <md-card>
          <md-card-header>
            <div class="md-title">Email</div>
            <div class="md-subtitle">Change your email. Requires reauthentication!</div>
          </md-card-header>
          <form @submit.prevent="updateEmail">
            <md-card-content>
              <md-field :class="{'md-invalid':$v.email.email.$error}">
                <label for="email">New Email</label>
                <md-input
                  v-model="email.email"
                  @blur="$v.email.email.$touch"
                  type="email"
                  name="email"
                  id="email"
                  required
                ></md-input>
                <span class="md-error" v-if="!$v.email.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.email.email.email">Invalid email format</span>
              </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button
                type="submit"
                :disabled="$v.email.$invalid"
                class="md-raised md-primary"
              >Update Email</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </md-tab>

      <md-tab id="tab-password" md-label="Password">
        <md-card>
          <md-card-header>
            <div class="md-title">Password</div>
            <div class="md-subtitle">Change your password. Requires reauthentication!</div>
          </md-card-header>
          <form @submit.prevent="updatePassword">
            <md-card-content>
              <md-field :class="{'md-invalid':$v.password.password.$error}">
                <label for="password">New Password</label>
                <md-input
                  v-model="password.password"
                  @blur="$v.password.password.$touch"
                  type="password"
                  name="password"
                  id="password"
                  required
                ></md-input>
                <span
                  class="md-error"
                  v-if="!$v.password.password.required"
                >The password is required</span>
                <span
                  class="md-error"
                  v-else-if="!$v.password.password.minLength||!$v.password.password.maxLength"
                >Password must be between 6 and 24 symbols</span>
              </md-field>
              <md-field :class="{'md-invalid':$v.password.repassword.$error}">
                <label for="repassword">Confirm Password</label>
                <md-input
                  v-model="password.repassword"
                  @blur="$v.password.repassword.$touch"
                  type="password"
                  name="repassword"
                  id="repassword"
                  required
                ></md-input>
                <span
                  class="md-error"
                  v-if="!$v.password.repassword.required"
                >Confirm password is required</span>
                <span class="md-error" v-if="!$v.password.repassword.sameAs">Passwords must match</span>
              </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button
                type="submit"
                :disabled="$v.password.$invalid"
                class="md-raised md-primary"
              >Update Password</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  helpers
} from "vuelidate/lib/validators";

const photoURL = helpers.regex(
  "photoURL",
  /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/
);

export default {
  name: 'ProfileEdit',
  data() {
    return {
      profile: { displayName: null, photoURL: null },
      email: { email: null },
      password: { password: null, repassword: null }
    };
  },
  methods: {
    updateProfile() {
      console.log({ ...this.profile });
    },
    updateEmail() {
      console.log({ ...this.email });
    },
    updatePassword() {
      console.log({ ...this.password });
    }
  },
  mixins: [validationMixin],
  validations: {
    profile: {
      displayName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(24)
      },
      photoURL: { required, photoURL }
    },
    email: {
      email: { required, email }
    },
    password: {
      password: { required, minLength: minLength(6), maxLength: maxLength(24) },
      repassword: { required, sameAs: sameAs("password") }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-button {
  width: 100%;
}
</style>