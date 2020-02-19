<template>
  <v-row dense>
    <v-col>
      <v-card class="mx-auto" v-show="article">
        <v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ article.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ article.body }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info">EDIT</v-btn>
          <v-btn color="error" @click="deleteArticle">DELETE</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    article: {
      title: "",
      body: ""
    }
  }),
  created() {
    this.$http.get(`articles/${this.$route.params.id}`).then(response => {
      this.article = response.data.data;
    });
  },
  methods: {
    async deleteArticle() {
      await this.$http.delete(`articles/${this.$route.params.id}`).then(() => {
        this.$router.go(-1);
      });
    }
  }
};
</script>
