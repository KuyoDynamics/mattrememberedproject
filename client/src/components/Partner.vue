<template>
  <v-card flat color="grey lighten-3" align-center justify-center class="py-5">
    <v-card-title class="justify-center">Supported by</v-card-title>
    <v-card-subtitle class="text-center"
      >Our partners that make it all possible</v-card-subtitle
    >
    <v-layout row flex align-center justify-center>
      <v-img
        :aspect-ratio="16 / 9"
        max-height="150"
        max-width="150"
        v-for="partner in partners"
        v-bind:key="partner.id"
        :src="partner.logo"
        :alt="partner.name"
        :href="partner.website"
        target="_blank"
      ></v-img>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      partners: [
        {
          id: 1,
          logo: require("@/assets/warma-logo.png"),
          name: "National Water Supply and Sanitation Council",
          website: "http://www.nwasco.org.zm/"
        },
        {
          id: 2,
          logo: require("@/assets/zema-logo.png"),
          name: "Zambia Environmental Management Agency",
          website: "https://www.zema.org.zm/"
        }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>
