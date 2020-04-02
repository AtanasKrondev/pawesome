<template>
  <div class="md-layout md-alignment-top-center">
    <md-tabs md-alignment="right" class="md-layout-item md-size-50 md-small-size-100">
      <md-tab id="tab-chat" :md-label="chat" class="md-scrollbar">
        <app-chat></app-chat>
      </md-tab>
      <md-tab id="tab-messages" md-label="Messages" class="md-scrollbar">
        <app-messages-list></app-messages-list>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import AppMessagesList from "./MessagesList.vue";
import AppChat from "./Chat.vue";

export default {
  name: 'Messages',
  components: {
    AppMessagesList,
    AppChat
  },
  data() {
    return {
      chat: "Chat"
    };
  }
};
</script>

<style lang="scss" scoped>
.md-tab {
  height: 80vh;
  overflow-y: scroll;
}

.md-layout {
  margin: -16px;
}
</style>