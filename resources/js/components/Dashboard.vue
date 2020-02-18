<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer />
      <v-btn text @click="logout">Logout</v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="full-height" fluid>
        <v-card class="mx-auto" v-for="article in articles" :key="article.id">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ article.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ article.body }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    articles: []
  }),
  methods: {
    logout() {
      this.$store.dispatch("authLogout").then(() => {
        this.$router.push("/");
      });
    }
  },
  created() {
    this.$http.get("articles").then(response => {
      this.articles = response.data.data;
    });
  }
};
</script>

