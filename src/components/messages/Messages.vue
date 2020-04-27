<template>
  <div v-if="!loading" class="md-layout md-alignment-top-center">
    <md-list class="md-layout-item md-size-50 md-small-size-100 md-scrollbar">
      <md-list-item v-for="c in chatList" :key="c.id">
        <md-avatar v-if="c.photoURL">
          <img :src="c.photoURL" />
        </md-avatar>
        <md-avatar v-else c>
          <md-icon>account_circle</md-icon>
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{c.displayName? c.displayName: 'Anonimous'}}</span>
        </div>
        <md-button class="md-icon-button md-list-action" :to="{name: 'message', params: {id:c.id}}">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import { db } from "../../main.js";

export default {
  data() {
    return { chats: [], chatList: [] };
  },
  watch: {
    immediate: true,
    chats(chats) {
      this.$store.commit("setLoading", true);
      const idArray = chats.map(c => this.otherUser(c.users));
      let itemRefs = idArray.map(id => {
        return db
          .collection("users")
          .doc(id)
          .get();
      });
      Promise.all(itemRefs)
        .then(docs => {
          this.chatList = docs.map(doc => {
            const id = doc.id;
            const data = doc.data();
            return { id, ...data };
          });
        })
        .then(() => this.$store.commit("setLoading", false))
        .catch(err => {
          console.log(err);
          this.$store.commit("setSnackbarText", err.message);
          this.$store.commit("setShowSnackbar", true);
        });
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    otherUser(users) {
      return users.find(u => u !== this.user.uid);
    }
  },
  firestore() {
    return {
      chats: db
        .collection("chats")
        .where("users", "array-contains", this.user.uid)
    };
  }
};
</script>

<style lang="scss" scoped>
.md-list {
  height: 80vh;
  overflow-y: scroll;
}
</style>