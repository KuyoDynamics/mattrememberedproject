<template>
  <main>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <section class="blogs-section">
      <template>
        <v-carousel height="400">
          <v-carousel-item
            v-for="(post,i) in blogPosts"
            :key="i"
            :src="post.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-layout row class="my-5" flex justify-center>
                <v-card flat color="transparent"  max-width="500" wrap>
                  <v-card-title>{{post.title}}</v-card-title>
                  <v-card-subtitle>{{post.subtitle}}</v-card-subtitle>
                  <v-card-text>{{post.text}}</v-card-text>
                  <v-card-actions>
                    <v-btn rounded>Read more</v-btn>
                  </v-card-actions>
                </v-card>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </template>
    </section>

    <section class="services">
      <v-container fill-height>
        <v-layout row flex align-center justify-center>
          <v-card
            class="mx-5 my-5"
            max-width="200"
            v-for="service in services"
            v-bind:key="service.id"
          >
            <v-card-title class="justify-center">{{service.title}}</v-card-title>

            <v-card-text class="text--primary justify-center">
              <p>{{service.text}}</p>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container>
    </section>
    <section class="achivements">
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
    </section>
    <section class="partners">
      <v-card flat color="grey lighten-3" align-center justify-center class="py-5">
        <v-card-title class="justify-center">Supported by</v-card-title>
        <v-card-subtitle class="text-center">Our partners that make it all possible</v-card-subtitle>
        <v-layout row flex align-center justify-center>
          <v-img
            :aspect-ratio="16/9"
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
    </section>

    <section class="get-involved">
      <v-card flat align-center justify-center class="py-5">
        <v-card-title class="justify-center">Get Involved</v-card-title>
        <v-card-subtitle class="text-center">Make Your Donation</v-card-subtitle>
        <v-card-actions class="justify-center">
          <v-btn text icon class="justify-center">
            <v-icon>mdi-patreon</v-icon>Patreon
          </v-btn>
          <v-btn text icon class="justify-center">
            <v-icon>mdi-credit-card</v-icon>Visa
          </v-btn>
          <v-btn text icon class="justify-center">
            <v-icon>mdi-paypal</v-icon>Paypal
          </v-btn>
        </v-card-actions>
      </v-card>
    </section>
  </main>
</template>
<script>
export default {
  // src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  name: "Home",
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
      ],
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
      ],
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
      ],
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
  }
};
</script>

