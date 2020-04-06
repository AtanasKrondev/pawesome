<template>
  <div class="md-toolbar-section-end">
    <md-button v-if="!user" to="/login">
      <md-icon>exit_to_app</md-icon>Login
    </md-button>
    <md-button v-if="user" class="md-icon-button" to="/messages">
      <md-icon>chat</md-icon>
    </md-button>
    <md-menu v-if="user">
      <md-button md-menu-trigger class="md-icon-button">
        <md-avatar class="md-avatar-icon">A</md-avatar>
      </md-button>
      <md-menu-content>
        <md-menu-item to="/ads">
          <md-icon>library_books</md-icon>My Ads
        </md-menu-item>
        <md-menu-item to="/ads">
          <md-icon>bookmarks</md-icon>Saved Ads
        </md-menu-item>
        <md-menu-item to="/profile">
          <md-icon>account_box</md-icon>Edit Profile
        </md-menu-item>
        <md-menu-item @click="logout">
          <md-icon>close</md-icon>Logout
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  props: {
    user: Object
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(result => {
          console.log(result);
          this.$router.push("/auth");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>