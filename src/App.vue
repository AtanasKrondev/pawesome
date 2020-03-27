<template>
  <div id="app" class="page-container">
    <!-- md-layout-column -->
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
          <md-menu>
            <md-button md-menu-trigger class="md-icon-button">
              <md-avatar class="md-avatar-icon">A</md-avatar>
            </md-button>
            <md-menu-content>
              <md-menu-item>
                <md-icon>exit_to_app</md-icon>Enter
              </md-menu-item>
              <md-menu-item>
                <md-icon>account_box</md-icon>Profile
              </md-menu-item>
              <md-menu-item>
                <md-icon>settings_applications</md-icon>Settings
              </md-menu-item>
              <md-menu-item>
                <md-icon>close</md-icon>Logout
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="navDrawer">
        <app-nav-drawer></app-nav-drawer>
      </md-app-drawer>

      <md-app-content>
        <app-content></app-content>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import AppNavDrawer from "./components/core/NavDrawer.vue";
import AppContent from "./components/core/Content.vue";

export default {
  name: "App",
  components: {
    AppNavDrawer,
    AppContent
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
    primary: purple,
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
