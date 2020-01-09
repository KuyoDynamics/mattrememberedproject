<template>
  <v-container fill-height>
    <v-layout row flex align-center justify-center>
      <v-card class="mx-5 my-5" max-width="200" v-for="service in services" v-bind:key="service.id">
        <v-card-title class="justify-center">{{service.title}}</v-card-title>

        <v-card-text class="text--primary justify-center">
          <p>{{service.text}}</p>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          icon: "mdi-water",
          title: "Clean Water",
          text:
            "We support communities and Schools with manually drilled boreholes. We also rehabilitate non-functional water facilities."
        },
        {
          id: 2,
          icon: "mdi-cart-plus",
          title: "Livelihoods",
          text:
            "We are supporting households with livestock such as cattle and goats. Improving the nutrition and incomes of rural households."
        },
        {
          id: 3,
          icon: "mdi-thumb-up",
          title: "Hygiene",
          text:
            "We promote hygiene education in both the communities and schools. This involves training of hygiene promoters and teachers"
        },
        {
          id: 4,
          icon: "mdi-toilet",
          title: "Sanitation",
          text:
            "We facilitate communities to construct latrines using locally available resources.These include batch and washing facilities."
        }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>