<template>
  <div class="md-layout md-alignment-top-center">
    <app-not-found v-if="noResult"></app-not-found>
    <div v-else class="chat md-scrollbar md-layout-item md-size-50 md-small-size-100">
      <md-list class="md-double-line">
        <md-list-item>
          <md-avatar>
            <img v-if="otherUser" :src="otherUser.photoURL" />
          </md-avatar>

          <div class="md-list-item-text">
            <span v-if="otherUser">{{otherUser.displayName}}</span>
          </div>
          <md-button class="md-icon-button md-list-action" to="/messages">
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
      <div v-if="user" class="msg-container md-scrollbar" id="chat">
        <div v-for="m in messages" :key="m.id" :class="{'own-msg':m.sender===user.uid}">
          <md-card :class="{'md-primary':m.sender===user.uid}">
            <md-card-content>{{m.message}}</md-card-content>
          </md-card>
          <p v-if="m.timestamp" class="md-caption">{{m.timestamp.toDate() | fromNow}}</p>
        </div>
      </div>
      <form @submit.prevent="submit">
        <md-field>
          <md-input v-model="message"></md-input>
          <md-button type="submit" class="md-icon-button md-primary">
            <md-icon>send</md-icon>
          </md-button>
        </md-field>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../../main.js";
import firebase from "firebase/app";
import "firebase/firestore";
import filterMixin from "../../mixin/filterMixin.js";
import AppNotFound from "../core/NotFound";

const fieldValue = firebase.firestore.FieldValue;

export default {
  components: { AppNotFound },
  mixins: [filterMixin],
  data() {
    return {
      message: "",
      otherUser: {},
      messages: []
    };
  },
  methods: {
    submit() {
      if (this.message) {
        const message = {
          message: this.message,
          sender: this.user.uid,
          timestamp: fieldValue.serverTimestamp()
        };
        db.collection("messages")
          .doc(this.chatId)
          .collection("messages")
          .add(message);
        this.message = "";
        this.scrollToEnd();
      }
    },
    scrollToEnd: function() {
      const container = this.$el.querySelector("#chat");
      container.scrollTop = container.scrollHeight;
    }
  },
  computed: {
    noResult() {
      return this.$store.getters.noResult;
    },
    user() {
      return this.$store.getters.user;
    },
    chatId() {
      const user1 = this.user ? this.user.uid : "";
      const user2 = this.otherUser ? this.otherUser.id : "";
      return user1 < user2 ? user1 + "_" + user2 : user2 + "_" + user1;
    }
  },
  watch: {
    "$route.params": {
      immediate: true,
      handler({ id }) {
        this.$store.commit("setLoading", true);
        this.$bind("otherUser", db.collection("users").doc(id)).then(doc => {
          this.$store.commit("setLoading", false);
          if (!doc) {
            this.$store.commit("setNoResult", true);
            return;
          }
          db.collection("chats")
            .doc(this.chatId)
            .set(
              {
                users: fieldValue.arrayUnion(this.user.uid, this.otherUser.id)
              },
              { merge: true }
            );
          this.$bind(
            "messages",
            db
              .collection("messages")
              .doc(this.chatId)
              .collection("messages")
              .orderBy("timestamp", "asc")
          ).then(() => this.scrollToEnd());
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow-y: scroll;
}

.msg-container {
  flex-grow: 1;
  overflow-y: scroll;
}

.md-content {
  display: flex;
}

.md-card {
  margin: 4px;
  border-radius: 25px;
  padding: 0;
}

.own-msg {
  text-align: right;
}

p {
  margin: 0;
}

.md-card-content {
  padding-top: 0;
  padding-bottom: 0;
}
</style>