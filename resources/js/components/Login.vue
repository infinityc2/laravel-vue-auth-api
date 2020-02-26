<template>
  <v-content>
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-toolbar color="primary" flat>
              <v-btn icon @click="$router.go(-1)">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field label="email" type="email" v-model="loginForm.email"></v-text-field>
                <v-text-field label="password" type="password" v-model="loginForm.password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" @click.prevent="login">Login</v-btn>
            </v-card-actions>
          </v-card>
          <v-snackbar v-model="snackbar" color="error">{{ message }}</v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    loginForm: {
      email: null,
      password: null
    },
    message: null,
    snackbar: false
  }),
  methods: {
    async login() {
      await this.$store
        .dispatch("authRequest", this.loginForm)
        .then(() => {
            this.$router.push("/dashboard");
        })
        .catch(error => {
          this.message = "Login Failed";
          this.snackbar = !this.snackbar;
        });
    }
  }
};
</script>
