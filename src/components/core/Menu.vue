<template>
  <md-menu>
    <md-button md-menu-trigger class="md-icon-button">
      <md-avatar class="md-avatar-icon">A</md-avatar>
    </md-button>
    <md-menu-content>
      <md-menu-item to="/auth">
        <md-icon>exit_to_app</md-icon>Enter
      </md-menu-item>
      <md-menu-item to="/ads">
        <md-icon>library_books</md-icon>My Ads
      </md-menu-item>
      <md-menu-item to="/ads">
        <md-icon>bookmarks</md-icon>Saved Ads
      </md-menu-item>
      <md-menu-item to="/profile">
        <md-icon>account_box</md-icon>Edit Profile
      </md-menu-item>
      <md-menu-item>
        <md-icon>close</md-icon>Logout
      </md-menu-item>
    </md-menu-content>
  </md-menu>
</template>