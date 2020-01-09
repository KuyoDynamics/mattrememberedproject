<template>
  <v-card flat align-center justify-center class="py-5" color="blue lighten-3">
    <v-card-title class="justify-center">Our Achievements</v-card-title>
    <v-card-subtitle class="text-center">It always seems impossible until it’s done</v-card-subtitle>
    <v-layout row flex align-center justify-center>
      <v-card
        flat
        color="transparent"
        width="150"
        height="150"
        v-for="achievement in achievements"
        v-bind:key="achievement.id"
      >
        <v-card-title>
          <v-icon dark x-large>{{achievement.icon}}</v-icon>
          {{achievement.value}}
        </v-card-title>
        <v-card-text class="text--primary justify-center">
          <p>{{achievement.description}}</p>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      achievements: [
        {
          id: 1,
          value: "10,000",
          description: "People helped with safe water",
          icon: "mdi-account-group-outline"
        },
        {
          id: 2,
          value: "600",
          description: "Boreholes Drilled",
          icon: "mdi-water-pump"
        },
        {
          id: 3,
          value: "350",
          description: "Hand Dug Wells",
          icon: "mdi-spade"
        }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>