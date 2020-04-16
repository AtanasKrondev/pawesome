<template>
  <div class="md-layout md-alignment-top-center">
    <div class="chat md-scrollbar md-layout-item md-size-50 md-small-size-100">
      <md-list class="md-double-line">
        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People" />
          </md-avatar>

          <div class="md-list-item-text">
            <span>Ali Connors</span>
            <span>Boxer for Breeding</span>
          </div>
          <md-button class="md-icon-button md-list-action" to="/messages">
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
      <div class="msg-container md-scrollbar">
        <md-card>
          <md-card-content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus magnam expedita sit unde praesentium cum neque veniam iure quibusdam iste, non reiciendis quo quasi consequuntur at porro repellendus! Doloribus, delectus!</md-card-content>
        </md-card>
        <md-card class="md-primary own-msg">
          <md-card-content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus magnam expedita sit unde praesentium cum neque veniam iure quibusdam iste, non reiciendis quo quasi consequuntur at porro repellendus! Doloribus, delectus!</md-card-content>
        </md-card>
        <md-card>
          <md-card-content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus magnam expedita sit unde praesentium cum neque veniam iure quibusdam iste, non reiciendis quo quasi consequuntur at porro repellendus! Doloribus, delectus!</md-card-content>
        </md-card>
        <md-card class="md-primary own-msg">
          <md-card-content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus magnam expedita sit unde praesentium cum neque veniam iure quibusdam iste, non reiciendis quo quasi consequuntur at porro repellendus! Doloribus, delectus!</md-card-content>
        </md-card>
        <md-card>
          <md-card-content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus magnam expedita sit unde praesentium cum neque veniam iure quibusdam iste, non reiciendis quo quasi consequuntur at porro repellendus! Doloribus, delectus!</md-card-content>
        </md-card>
        <md-card class="md-primary own-msg">
          <md-card-content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus magnam expedita sit unde praesentium cum neque veniam iure quibusdam iste, non reiciendis quo quasi consequuntur at porro repellendus! Doloribus, delectus!</md-card-content>
        </md-card>
        <md-card>
          <md-card-content>bla bl</md-card-content>
        </md-card>
        <md-card class="md-primary own-msg">
          <md-card-content>bla bl</md-card-content>
        </md-card>
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

export default {
  data() {
    return {
      message: "",
      otherUser: {}
    };
  },
  methods: {
    submit() {
      if (this.message) {
        console.log(this.message);
        this.message = "";
      }
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
          }
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

.own-msg .md-card-content {
  text-align: right;
}
</style>