<template>
  <v-dialog v-model="dialog" width="50%">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" :color="btnColor">{{ btnTxt }}</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">{{ titleTxt }}</v-card-title>
      <v-card-text>{{ descripeTxt }}</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn :color="cancelColor" @click="dialog = !dialog" :text="cancelTypeTxt">{{ cancelTxt }}</v-btn>
        <v-btn :color="acceptColor" @click="acceptHandler" :text="acceptTypeTxt">{{ acceptTxt }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    btnTxt: {
      type: String,
      require: true
    },
    titleTxt: {
      type: String,
      require: true
    },
    descripeTxt: {
      type: String,
      require: true
    },
    acceptTxt: {
      type: String,
      default: "OK"
    },
    cancelTxt: {
      type: String,
      default: "Cancel"
    },
    acceptColor: {
      default: "primary"
    },
    cancelColor: {
      default: "error"
    },
    acceptTypeTxt: {
      type: Boolean,
      default: false
    },
    cancelTypeTxt: {
      type: Boolean,
      default: true
    },
    btnColor: {
      default: "primary"
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    async acceptHandler() {
      this.$emit("acceptHandle");
    }
  }
};
</script>
