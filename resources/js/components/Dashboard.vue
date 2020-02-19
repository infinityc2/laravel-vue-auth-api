<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer />
      <v-btn text @click="logout">Logout</v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="full-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("authLogout").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

