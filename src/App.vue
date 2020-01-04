/* eslint-disable no-console */
// Properties from the app-bar
// color
// Properties from <!--<v-img v-bind="props" >-->
// gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
// Properties for v-app-bar
// src="https://picsum.photos/1920/1080?random"
<template>
  <v-app>
    <v-app-bar
      absolute
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <div>
        <v-avatar size="150" elevation="3">
          <img src="https://themattrememberedproject.s3.amazonaws.com/matt.jpg" alt="Matt" />
        </v-avatar>
        <v-toolbar-title>The Matt Remembered Project</v-toolbar-title>
      </div>

      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(142,199,188,1), rgba(0,0,0,.7)"></v-img>
      </template>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <template v-slot:extension>
        <v-tabs centered center-active background-color="transparent" icons-and-text>
          <v-tab to="/">
            Home
            <v-icon>mdi-home</v-icon>
          </v-tab>
          <v-tab to="/our-work">
            Our Work
            <v-icon>mdi-water-pump</v-icon>
          </v-tab>
          <v-tab to="/about">
            About Matt
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content id="scrolling-techniques-5">
      <router-view></router-view>
    </v-content>

    <MainMenu />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./views/Footer";
import MainMenu from "./views/MainMenu";
import axios from "axios";
// import func from "../vue-temp/vue-editor-bridge";

export default {
  name: "App",
  components: {
    Footer,
    MainMenu
  },
  data: () => ({
    //return {
    clipped: false,
    drawer: true,
    fixed: false,
    miniVariant: false,
    right: true,
    rightDrawer: false
  }),
  methods: {
    getBackgroundImages: function() {
      const apiLink = "";
      axios
        .get(apiLink)
        .then(res => {
          // eslint-disable-next-line no-console
          console.log("Response: " + res);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }
};
</script>
