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
          ></v-carousel-item>
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
            <v-card-title>{{service.title}}</v-card-title>

            <v-card-text class="text--primary">
              <p>{{service.text}}</p>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container>
    </section>
    <section class="partners">
      <v-card>
        <v-card-title>Supported by</v-card-title>
        <v-card-subtitle>Our partners that makes it all possible</v-card-subtitle>
        <v-layout row>
          <v-img
            v-for="partner in partners"
            v-bind:key="partner.id"
            :src="partner.logo"
            :alt="partner.name"
            link
            :href="partner.website"
            target="_blank"
          ></v-img>
        </v-layout>
      </v-card>
    </section>
    <section class="achivements"></section>
    <section class="get-involved"></section>
  </main>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      blogPosts: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
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
          logo: require('@/assets/warma-logo.png'),
          name: "National Water Supply and Sanitation Council",
          website: "http://www.nwasco.org.zm/"
        },
        {
          id: 2,
          logo: require('@/assets/zema-logo.png'),
          name: "Zambia Environmental Management Agency",
          website: "https://www.zema.org.zm/"
        }
      ]
    };
  }
};
</script>

