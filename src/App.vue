<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="navDrawer = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">
          <md-button to="/">
            <md-icon>pets</md-icon>Pawesome
          </md-button>
        </span>

        <app-menu></app-menu>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="navDrawer" md-swipeable>
        <app-nav-drawer></app-nav-drawer>
      </md-app-drawer>

      <md-app-content>
        <md-progress-bar v-if="loading" md-mode="indeterminate" class="md-accent"></md-progress-bar>
        <router-view></router-view>
        <app-snack-bar></app-snack-bar>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import "vue-material/dist/theme/default.css";
import AppNavDrawer from "./components/core/NavDrawer.vue";
import AppMenu from "./components/core/Menu.vue";
import AppSnackBar from "./components/core/SnackBar.vue";

export default {
  name: "App",
  components: {
    AppNavDrawer,
    AppMenu,
    AppSnackBar
  },
  data() {
    return {
      navDrawer: false
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
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

.md-progress-bar {
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -16px;
}
</style>
