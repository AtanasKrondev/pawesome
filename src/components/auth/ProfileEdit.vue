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
          <form @submit.prevent="openDialog('updateEmail')">
            <md-card-content>
              <md-field :class="{'md-invalid':$v.email.$error}">
                <label for="email">New Email</label>
                <md-input
                  v-model="email"
                  @blur="$v.email.$touch"
                  type="email"
                  name="email"
                  id="email"
                  required
                ></md-input>
                <span class="md-error" v-if="!$v.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.email.email">Invalid email format</span>
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
          <form @submit.prevent="openDialog('updatePassword')">
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
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Confirm current password</md-dialog-title>
      <form @submit.prevent="submitDialog">
        <md-dialog-content>
          <md-field :class="{'md-invalid':$v.confirmPassword.$error}">
            <label for="confirm-password">Confirm Password</label>
            <md-input
              v-model="confirmPassword"
              @blur="$v.confirmPassword.$touch"
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
            ></md-input>
            <span class="md-error" v-if="!$v.confirmPassword.required">The password is required</span>
            <span
              class="md-error"
              v-else-if="!$v.confirmPassword.minLength||!$v.confirmPassword.maxLength"
            >Password must be between 6 and 24 symbols</span>
          </md-field>
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
          <md-button type="submit" class="md-primary md-raised" @click="submitDialog">Submit</md-button>
        </md-dialog-actions>
      </form>
    </md-dialog>
  </div>
</template>

<script>
// import * as firebase from "firebase/app";
// import "firebase/auth";
import { auth } from "../../main.js";
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
  name: "ProfileEdit",
  data() {
    return {
      profile: { displayName: null, photoURL: null },
      email: null,
      password: { password: null, repassword: null },
      confirmPassword: null,
      showDialog: false,
      updateProperty: null
    };
  },
  created() {
    this.profile.displayName = this.$store.getters.user.displayName;
    this.profile.photoURL = this.$store.getters.user.photoURL;
    this.email = this.$store.getters.user.email;
  },
  methods: {
    updateProfile() {
      const payload = {
        displayName: this.profile.displayName,
        photoURL: this.profile.photoURL
      };
      this.$store.dispatch("updateProfile", payload);
    },
    openDialog(value) {
      this.showDialog = true;
      this.updateProperty = value;
    },
    submitDialog() {
      this.showDialog = false;
      const payload = {
        email: this.$store.getters.user.email,
        password: this.confirmPassword
      };
      // firebase
      //   .auth()
      auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          if (this.updateProperty === "updateEmail") {
            this.$store.dispatch("updateEmail", this.email);
            console.log("Email updated");
          }
          if (this.updateProperty === "updatePassword") {
            // firebase
            //   .auth()
            auth.currentUser
              .updatePassword(this.password.password)
              .then(() => {
                console.log("Password updated");
              })
              .catch(err => console.log(err));
          }
          this.updateProperty = null;
        })
        .catch(err => console.log(err));
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
    email: { required, email },
    password: {
      password: { required, minLength: minLength(6), maxLength: maxLength(24) },
      repassword: { required, sameAs: sameAs("password") }
    },
    confirmPassword: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(24)
    }
  }
};
</script>

<style lang="scss" scoped>
.md-button {
  width: 100%;
}
</style>