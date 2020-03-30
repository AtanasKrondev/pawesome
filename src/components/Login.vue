<template>
  <div class="md-layout md-alignment-top-center">
    <md-tabs md-alignment="fixed" class="md-layout-item md-size-50 md-small-size-100">
      <md-tab id="tab-login" md-label="Login">
        <md-card>
          <md-card-header>
            <div class="md-title">Login</div>
          </md-card-header>
          <form>
            <md-card-content>
              <md-field>
                <label for="login-email">Email</label>
                <md-input v-model="login.email" type="email" name="login-email" id="login-email"></md-input>
              </md-field>
              <md-field>
                <label for="login-password">Password</label>
                <md-input
                  v-model="login.password"
                  type="password"
                  name="login-password"
                  id="login-password"
                ></md-input>
              </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button class="md-raised md-primary">Login</md-button>
            </md-card-actions>
          </form>
        </md-card>
        <p>
          Still don't have an account?
          <a href>Register</a>
        </p>
      </md-tab>

      <md-tab id="tab-register" md-label="Register">
        <md-card>
          <md-card-header>
            <div class="md-title">Register</div>
          </md-card-header>
          <form>
            <md-card-content>
              <md-field>
                <label for="register-email">Email</label>
                <md-input
                  v-model="register.email"
                  type="email"
                  name="register-email"
                  id="register-email"
                ></md-input>
              </md-field>
              <md-field>
                <label for="register-password">Password</label>
                <md-input
                  v-model="register.password"
                  type="password"
                  name="register-password"
                  id="register-password"
                ></md-input>
              </md-field>
              <md-field>
                <label for="register-repassword">Confirm Password</label>
                <md-input
                  v-model="register.rePassword"
                  type="password"
                  name="register-repassword"
                  id="register-repassword"
                ></md-input>
              </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button class="md-raised md-primary">Register</md-button>
            </md-card-actions>
          </form>
        </md-card>
        <p>
          Already have an account?
          <a href>Login</a>
        </p>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: { email: "", password: "" },
      register: { email: "", password: "", rePassword: "" }
    };
  }
};
</script>

<style lang="scss" scoped>

.md-button {
  width: 100%;
}
</style>