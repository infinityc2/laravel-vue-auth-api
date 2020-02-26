<template>
  <v-flex>
    <v-btn color="primary" to="/dashboard/articles">Back</v-btn>
    <v-row dense>
      <v-col>
        <v-card class="mx-auto">
          <v-card-text>
            <v-form>
              <v-text-field label="title" v-model="article.title"></v-text-field>
              <v-textarea label="body" v-model="article.body"></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="info" @click="createArticle">CREATE</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    article: {
      title: "",
      body: ""
    }
  }),
  methods: {
    async createArticle() {
      this.$http.post(`articles`, this.article).then(() => {
        this.$router.go(-1);
      });
    }
  }
};
</script>
