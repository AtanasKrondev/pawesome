<template>
  <div class="chat">
    <md-list class="md-double-line">
      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People" />
        </md-avatar>

        <div class="md-list-item-text">
          <span>Ali Connors</span>
          <span>Boxer for Breeding</span>
        </div>
        <md-button class="md-icon-button md-list-action">
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
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    submit() {
      if (this.message) {
        console.log(this.message);
        this.message = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat {
  height: 100%;
  display: flex;
  flex-direction: column;
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