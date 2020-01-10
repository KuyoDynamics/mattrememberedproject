<template>
  <v-footer dark padless absolute class="pa-0 text-center" app>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-avatar size="124">
          <img src="../assets/matt.jpg" alt="Matt" />
        </v-avatar>
        <v-spacer></v-spacer>
        <strong class="subheading">Contact Us</strong>
        <v-icon>mdi-email</v-icon>&nbsp;
        <v-btn :href="`mailto:$contactEmail`" class="white-text" text link>{{
          contactEmail
        }}</v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        &copy;{{ year }} —
        <strong>The Matt Remembered Project, Inc.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter"],
    contactEmail: "info@mattrememberedproject.co.uk"
  }),
  computed: {
    year: function() {
      return new Date().getFullYear();
    }
  }
};
</script>
<style>
a.primary--text {
  color: white !important;
  caret-color: #f4f4f4 !important;
}
</style>
