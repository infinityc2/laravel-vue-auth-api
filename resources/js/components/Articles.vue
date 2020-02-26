<template>
  <v-flex>
    <v-btn color="primary" to="articles/create/article">Create</v-btn>
    <v-row dense>
      <v-col v-for="article in articles" :key="article.id">
        <v-card class="mx-auto" :to="{ path: `articles/${article.id}`}">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ article.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ article.body }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    articles: []
  }),
  created() {
    this.$http.get("articles").then(response => {
      this.articles = response.data.data;
    });
  }
};
</script>
