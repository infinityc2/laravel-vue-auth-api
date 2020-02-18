<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Home Page</h1>
        <h4 class="subheading">Welcome to my Application</h4>
        <v-btn color="primary" :to="{ name: 'register' }">REGISTER</v-btn>
        <v-btn color="primary" :to="{ name: 'login' }">LOGIN</v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>
