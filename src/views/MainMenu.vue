<template>
  <v-navigation-drawer v-model="drawer" absolute bottom temporary height="auto" app>
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
        <v-list-item v-for="item in items" :key="item.title" link>
          <!-- <router-link :to="item.route"> -->
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <!-- </router-link> -->
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city", route: "/" },
        { title: "My Account", icon: "mdi-account", route: "/accounts" },
        { title: "Users", icon: "mdi-account-group-outline", route: "/users" }
      ],
      drawer: false,
      group: null
    };
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>