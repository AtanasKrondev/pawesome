<template>
  <md-snackbar :md-active.sync="showSnackbar" md-persistent>
    <span>{{snackbarText}}</span>
    <md-button class="md-primary md-icon-button" @click="close">
      <md-icon>close</md-icon>
    </md-button>
  </md-snackbar>
</template>

<script>
export default {
  computed: {
    showSnackbar: {
      get() {
        return this.$store.getters.showSnackbar;
      },
      set(showSnackbar) {
        return showSnackbar;
      }
    },
    snackbarText() {
      return this.$store.getters.snackbarText;
    }
  },
  methods: {
    close() {
      this.$store.commit("setShowSnackbar", false);
    }
  }
};
</script>