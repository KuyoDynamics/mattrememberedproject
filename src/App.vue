<template>
  <v-app>
    <v-card>
      <v-toolbar color="cyan" dark flat height="auto" src="https://picsum.photos/1920/1080?random">
        <div>
          <v-avatar size="124">
            <img src="https://themattrememberedproject.s3.amazonaws.com/matt.jpg" alt="Matt" />
          </v-avatar>

          <v-toolbar-title>The Matt Remembered Project</v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <v-app-bar-nav-icon fixed right top></v-app-bar-nav-icon>

        <template v-slot:extension>
          <v-tabs v-model="model" centered slider-color="yellow" background-color="transparent">
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
      </v-toolbar>

      <v-tabs-items v-model="model">
        <router-view></router-view>
      </v-tabs-items>
    </v-card>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./views/Footer";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>