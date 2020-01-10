import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Donation from "./components/Donation.vue";
import Achievement from "./components/Achievement.vue";
import Service from "./views/Services.vue";
import BlogPost from "./views/Blogposts.vue";
import Partner from "./components/Partner.vue";

Vue.config.productionTip = false;

Vue.component("service", Service);
Vue.component("donation", Donation);
Vue.component("achievement", Achievement);
Vue.component("blog-post", BlogPost);
Vue.component("partner", Partner);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
