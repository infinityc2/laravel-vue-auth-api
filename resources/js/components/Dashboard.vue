<template>
  <v-content>
    <v-container class="full-height" fluid>
      <v-card class="mx-auto" v-for="article in $store.state.articles" :key="article.id">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ article.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ article.body }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  created: () => {
    this.$store.dispatch("fetchArticles");
  }
};
</script>
