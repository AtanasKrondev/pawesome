<template>
  <div class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-50 md-small-size-100">
      <md-card>
        <md-card-header>
          <div class="md-title">Register</div>
        </md-card-header>
        <form @submit.prevent="submit">
          <md-card-content>
            <md-field :class="{'md-invalid':$v.email.$error}">
              <label for="register-email">Email</label>
              <md-input
                v-model="email"
                @blur="$v.email.$touch"
                type="email"
                name="register-email"
                id="register-email"
                required
              ></md-input>
              <span class="md-error" v-if="!$v.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.email.email">Invalid email format</span>
            </md-field>
            <md-field :class="{'md-invalid':$v.password.$error}">
              <label for="register-password">Password</label>
              <md-input
                v-model="password"
                @blur="$v.password.$touch"
                type="password"
                name="register-password"
                id="register-password"
                required
              ></md-input>
              <span class="md-error" v-if="!$v.password.required">The password is required</span>
              <span
                class="md-error"
                v-else-if="!$v.password.minLength||!$v.password.maxLength"
              >Password must be between 6 and 24 symbols</span>
            </md-field>
            <md-field :class="{'md-invalid':$v.repassword.$error}">
              <label for="register-repassword">Confirm Password</label>
              <md-input
                v-model="repassword"
                @blur="$v.repassword.$touch"
                type="password"
                name="register-repassword"
                id="register-repassword"
                required
              ></md-input>
              <span class="md-error" v-if="!$v.repassword.required">Confirm password is required</span>
              <span class="md-error" v-if="!$v.repassword.sameAs">Passwords must match</span>
            </md-field>
          </md-card-content>
          <md-card-actions>
            <md-button type="submit" :disabled="$v.$invalid" class="md-raised md-primary">Register</md-button>
          </md-card-actions>
        </form>
      </md-card>
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
// import * as firebase from "firebase/app";
// import "firebase/auth";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    submit() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', user)
    }
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(24) },
    repassword: { required, sameAs: sameAs("password") }
  }
};
</script>

<style lang="scss" scoped>
.md-button {
  width: 100%;
}
</style>