<template>
  <div class="md-layout md-alignment-top-center">
    <md-tabs md-alignment="fixed" class="md-layout-item md-size-50 md-small-size-100">
      <md-tab id="tab-profile" md-label="Profile">
        <md-card>
          <md-card-header>
            <div class="md-title">Name and Photo</div>
          </md-card-header>
          <form>
            <md-card-content>
              <md-field>
                <label for="display-name">Display Name</label>
                <md-input
                  v-model="profile.displayName"
                  type="text"
                  name="display-name"
                  id="display-name"
                ></md-input>
              </md-field>
              <md-field>
                <label for="photo-url">Photo URL</label>
                <md-input v-model="profile.photoURL" type="text" name="photo-url" id="photo-url"></md-input>
              </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button class="md-raised md-primary">Update Profile</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </md-tab>

      <md-tab id="tab-email" md-label="Email">
        <md-card>
          <md-card-header>
            <div class="md-title">Email</div>
          </md-card-header>
          <form>
            <md-card-content>
              <md-field>
                <label for="email">New Email</label>
                <md-input v-model="email.email" type="email" name="email" id="email"></md-input>
              </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button class="md-raised md-primary">Update Email</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </md-tab>

      <md-tab id="tab-password" md-label="Password">
        <md-card>
          <md-card-header>
            <div class="md-title">Password</div>
          </md-card-header>
          <form>
            <md-card-content>
              <md-field>
                <label for="password">New Password</label>
                <md-input v-model="password.password" type="password" name="password" id="password"></md-input>
              </md-field>
              <md-field>
                <label for="repassword">Confirm Password</label>
                <md-input
                  v-model="password.rePassword"
                  type="password"
                  name="repassword"
                  id="repassword"
                ></md-input>
              </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button class="md-raised md-primary">Update Password</md-button>
            </md-card-actions>
          </form>
        </md-card>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: { displayName: "", photoURL: "" },
      email: { email: "" },
      password: { password: "", rePassword: "" }
    };
  }
};
</script>

<style lang="scss" scoped>
.md-button {
  width: 100%;
}
</style>