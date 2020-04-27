<template>
  <div class="md-layout md-alignment-top-center">
    <md-list
      class="md-triple-line md-dense md-layout-item md-size-50 md-small-size-100 md-scrollbar"
    >
      <md-list-item v-for="c in chatList" :key="c.id">
        <md-avatar>
          <img :src="c.photoURL" />
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{c.displayName}}</span>
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