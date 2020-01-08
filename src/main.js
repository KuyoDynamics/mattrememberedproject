import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
import Donation from './views/Donation.vue';
import Achievement from './views/Achievement.vue';
import Service from './views/Service.vue';
import BlogPost from './views/BlogPost.vue';
import Partner from './views/Partner.vue';

Vue.component('service', Service);
Vue.component('donation', Donation);
Vue.component('achievement', Achievement);
Vue.component('blog-post', BlogPost);
Vue.component('partner', Partner);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
