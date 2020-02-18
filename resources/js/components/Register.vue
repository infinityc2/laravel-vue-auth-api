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
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field label="name" v-model="registerForm.name"></v-text-field>
                <v-text-field label="email" type="email" v-model="registerForm.email"></v-text-field>
                <v-text-field label="password" type="password" v-model="registerForm.password"></v-text-field>
                <v-text-field label="re-password" type="password" v-model="registerForm.c_password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" @click.prevent="register">Register</v-btn>
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
    registerForm: {
      name: null,
      email: null,
      password: null,
      c_password: null
    },
    message: null,
    snackbar: false
  }),
  methods: {
    register() {
      this.$store
        .dispatch("userRegister", this.registerForm)
        .then(() => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.message = "Register Failed";
          this.snackbar = !this.snackbar;
        });
    }
  }
};
</script>



