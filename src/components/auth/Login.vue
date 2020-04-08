<template>
  <div class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-50 md-small-size-100">
      <md-card>
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>
        <form @submit.prevent="submit">
          <md-card-content>
            <md-field :class="{'md-invalid':$v.email.$error}">
              <label for="login-email">Email</label>
              <md-input
                v-model="email"
                @blur="$v.email.$touch"
                type="email"
                name="login-email"
                id="login-email"
                required
              ></md-input>
              <span class="md-error" v-if="!$v.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.email.email">Invalid email format</span>
            </md-field>
            <md-field :class="{'md-invalid':$v.password.$error}">
              <label for="login-password">Password</label>
              <md-input
                v-model="password"
                @blur="$v.password.$touch"
                type="password"
                name="login-password"
                id="login-password"
                required
              ></md-input>
              <span class="md-error" v-if="!$v.password.required">The password is required</span>
              <span
                class="md-error"
                v-else-if="!$v.password.minLength||!$v.password.maxLength"
              >Password must be between 6 and 24 symbols</span>
            </md-field>
          </md-card-content>
          <md-card-actions>
            <md-button type="submit" :disabled="$v.$invalid" class="md-raised md-primary">Login</md-button>
          </md-card-actions>
        </form>
      </md-card>
      <p>
        Still don't have an account?
        <router-link to="/register">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
    }
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(24) }
  }
};
</script>

<style lang="scss" scoped>
.md-button {
  width: 100%;
}
</style>