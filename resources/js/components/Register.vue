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
                <v-text-field label="username"></v-text-field>
                <v-text-field label="password" type="password"></v-text-field>
                <v-text-field label="name"></v-text-field>
                <v-text-field label="email" type="email"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
    data: () => ({
        registerForm: {
            username: null,
            password: null,
            name: null,
            email: null
        }
    }),
}
</script>



