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
          <v-btn color="info" :to="{ path: 'edit', params: { id: article.id } }">EDIT</v-btn>
          <warning-dialog
            btnTxt="DELETE"
            btnColor="error"
            titleTxt="Delete Article"
            :descripeTxt="`Are you sure you want to delete ${article.title}`"
            acceptTxt="Yes, delete it."
            cancelTxt="No, Do not delete it."
            acceptColor="error"
            cancelColor="primary"
            :acceptTypeTxt="true"
            :cancelTypeTxt="false"
            @acceptHandle="deleteArticle"
            />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import WarningDialog from "./WarningDialog";

export default {
  components: {
    WarningDialog
  },
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
