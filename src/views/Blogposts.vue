<template>
  <v-carousel height="400">
    <v-carousel-item
      v-for="(post, i) in blogPosts"
      :key="i"
      :src="post.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-layout row class="my-5" flex justify-center>
        <v-card flat color="transparent" max-width="500" wrap>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-subtitle>{{ post.subtitle }}</v-card-subtitle>
          <v-card-text>{{ post.text }}</v-card-text>
          <v-card-actions>
            <v-btn rounded>Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      blogPosts: [
        {
          src: require("@/assets/water-zambia.png"),
          title: "Clean Water",
          subtitle: "is essential to all life",
          text:
            "We provide boreholes and install water pumps in Zambia. Since 2016, we have served over 25000 with safe drinking water"
        },
        {
          src: require("@/assets/water-zambia.png"),
          title: "Rural Livelihood",
          subtitle: "no human life derserves to live on an empty stomach",
          text:
            "Through water services and short loans, we help local farmers grow food."
        },
        {
          src: require("@/assets/water-zambia.png"),
          title: "Hygiene",
          subtitle: "is essential to all life",
          text:
            "We help communities adopt hygiene practices that protect water sources from being contaminated"
        },
        {
          src: require("@/assets/water-zambia.png"),
          title: "Sanitation",
          subtitle: "clean living environment for all",
          text:
            "Our water services help prevent human contact with feces and promotes hand washing with soap"
        }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>
