// src="https://picsum.photos/1920/1080?random"
<template>
  <v-app>
    <v-app-bar
      dark
      prominent
      shrink-on-scroll
      scroll-threshold="500"
      app
      src="./assets/water-body.jpg"
      height="80"
    >
      <v-avatar size="124">
        <img src="./assets/matt.jpg" alt="Matt" />
        <!-- <v-icon dark x-large>mdi-account-group-outline</v-icon> -->
      </v-avatar>
      <v-toolbar-title>The Matt Remembered Project</v-toolbar-title>
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>
      <template v-slot:extension>
        <v-tabs centered slider-color="yellow" background-color="transparent" class="hidden-sm-and-down">
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
          <template id="admin-tabs" v-if="loggedIn">
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

    <v-navigation-drawer dark v-model="drawer" right temporary height="auto" app>
      <template v-slot:prepend>
        <v-list-item two-line v-if="loggedIn">
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
          <v-list-item v-for="item in filteredItems" :key="item.title" link :to="item.route">
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
          <!-- <v-btn block @click="$router.push('logout')" v-if="loggedIn">Logout</v-btn> -->
          <v-btn block @click="logout" v-if="loggedIn">Logout</v-btn>
          <v-btn block @click="login" v-if="!loggedIn">Login</v-btn>
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
  data: function() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city", route: "/", protected: false },
        {
          title: "Our Work",
          icon: "mdi-water-pump",
          route: "/our-work",
          protected: false
        },
        {
          title: "About Matt",
          icon: "mdi-account-box",
          route: "/about",
          protected: false
        },
        { title: "Posts", icon: "mdi-post", route: "/posts", protected: true },
        {
          title: "Media Manager",
          icon: "mdi-folder-multiple-image",
          route: "/media",
          protected: true
        },
        {
          title: "My Account",
          icon: "mdi-account",
          route: "/accounts",
          protected: true
        },
        {
          title: "Users",
          icon: "mdi-account-group-outline",
          route: "/users",
          protected: true
        }
      ],
      loggedIn: false,
      drawer: false,
      group: null,
      user: {
        role: "admin"
      }
    };
  },
  methods: {
    // isAuthenticated: () => {
    //   return (
    //     this.user != null &&
    //     this.user.role == "admin" &&
    //     this.user.loggedIn == true
    //   );
    // },
    logout: function() {
      this.loggedIn = false;
      return this.loggedIn;
    },
    login: function() {
      this.loggedIn = true;
      return this.loggedIn;
    }
  },
  computed: {
    filteredItems() {
      var filtered = this.items.filter(el => {
        return this.loggedIn || !el.protected;
      });
      return filtered;
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
