<template>
  <v-app>
    <v-app-bar
      color="red"
      dark
      prominent
      shrink-on-scroll="true"
      scroll-threshold="500"
      app
      src="https://picsum.photos/1920/1080?random"
    >
      <v-avatar size="124">
        <img src="https://themattrememberedproject.s3.amazonaws.com/matt.jpg" alt="Matt" />
      </v-avatar>

      <v-toolbar-title>The Matt Remembered Project</v-toolbar-title>
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>
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
          <template id="admin-tabs" v-if="isAuthenticated">
            <v-tab to="/posts">
              Posts
              <v-icon>mdi-post</v-icon>
            </v-tab>
            <v-tab to="/media">
              Media Manager
              <v-icon>mdi-folder-multiple-image</v-icon>
            </v-tab>
            <v-tab to="/users">
              Users
              <v-icon>mdi-account-group-outline</v-icon>
            </v-tab>
          </template>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon fixed right top @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer dark="true" v-model="drawer" right temporary height="auto" app>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Abraham Banda</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="$router.push('logout')">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-content id="scrolling-techniques-5">
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./views/Footer";
export default {
  name: "App",
  components: {
    Footer
  },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city", route: "/" },
        { title: "Posts", icon: "mdi-post", route: "/posts" },
        {
          title: "Media",
          icon: "mdi-folder-multiple-image",
          route: "/media-manager"
        },
        { title: "My Account", icon: "mdi-account", route: "/accounts" },
        { title: "Users", icon: "mdi-account-group-outline", route: "/users" }
      ],
      drawer: false,
      group: null,
      user: {
        role: 'admin',
        loggedIn: false
      }
    };
  },
  methods: {
    isAuthenticated: () =>{
      return this.user != null && this.user.role=='admin' && this.user.loggedIn==true
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
