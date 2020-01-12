<template>
  <v-container fluid class="mx-0 pa-0">
    <section class="blog-posts">
      <blog-post></blog-post>
    </section>
    <section class="services">
      <service></service>
    </section>
    <section class="achievements">
      <achievement></achievement>
    </section>
    <section class="partners">
      <partner></partner>
    </section>
    <section class="get-involved">
      <donation></donation>
    </section>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>
