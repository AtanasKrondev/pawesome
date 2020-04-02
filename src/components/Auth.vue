<template>
  <div class="md-layout md-alignment-top-center">
    <md-tabs md-alignment="fixed" class="md-layout-item md-size-50 md-small-size-100">
      <md-tab id="tab-login" md-label="Login">
        <app-login></app-login>
        <p>
          Still don't have an account?
          <a href>Register</a>
        </p>
      </md-tab>

      <md-tab id="tab-register" md-label="Register">
        <app-register></app-register>
        <p>
          Already have an account?
          <a href>Login</a>
        </p>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import AppLogin from './Login.vue'
import AppRegister from './Register.vue'

export default {
  name: 'Auth',
  components: {AppLogin, AppRegister},
};
</script>
