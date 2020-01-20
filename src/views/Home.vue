<template>
  <div class="home">
    <h2>Home</h2>
    <HelloWorld :theme="theme" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },

  computed: {
    theme() {
      let theme = "default";
      if (this.$route.query.theme) theme = this.$route.query.theme;
      return theme;
    }
  }
};
</script>
