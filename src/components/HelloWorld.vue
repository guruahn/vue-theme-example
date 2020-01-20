<template>
  <div class="hello">
    <h1>Your theme is {{ theme }}</h1>
    <p>
      <a class="button" :href="`/`">Default Theme</a>
      <a class="button" :href="`/?theme=red`">Red Theme</a>
      <a class="button" :href="`/?theme=blue`">Blue Theme</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    theme: String
  }
};
</script>
