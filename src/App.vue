<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="navDrawer = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">
          <md-icon>pets</md-icon>Pawesome
        </span>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>chat</md-icon>
          </md-button>
          <app-menu></app-menu>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="navDrawer">
        <app-nav-drawer></app-nav-drawer>
      </md-app-drawer>

      <md-app-content>
        <!-- <app-ad-list></app-ad-list> -->
        <!-- <app-ad-details></app-ad-details> -->
        <!-- <app-login></app-login> -->
        <!-- <app-ad-form></app-ad-form> -->
        <app-profile-edit></app-profile-edit>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import AppNavDrawer from "./components/core/NavDrawer.vue";
import AppMenu from "./components/core/Menu.vue";
import AppProfileEdit from "./components/ProfileEdit.vue";
// import AppAdList from "./components/AdList.vue";
// import AppAdForm from "./components/AdForm.vue";
// import AppAdDetails from "./components/AdDetails.vue";
// import AppLogin from "./components/Login.vue";

export default {
  name: "App",
  components: {
    AppNavDrawer,
    AppMenu,
    AppProfileEdit
    // AppAdList,
    // AppAdForm,
    // AppAdDetails,
    // AppLogin
  },
  data() {
    return {
      navDrawer: false
    };
  }
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme(
  "default",
  (
    primary: rgb(191, 194, 4),
    accent: white,
    theme: dark
  )
);

@import "~vue-material/dist/theme/all";

.md-app {
  height: 100vh;
}

.md-app-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
