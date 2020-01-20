<template>
  <div>
    <h2>About</h2>
    <HelloWorld :theme="theme" />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "about",
  components: {
    HelloWorld
  },
  data() {
    return {};
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
<style lang='scss'>
</style>
