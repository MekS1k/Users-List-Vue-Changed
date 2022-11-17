<template>
  <div class="infoProg">
    <p>Картотека юзеров {{ VersionProject }}</p>
    <a href="https://github.com/MekS1k" target="_blank"
      >https://github.com/MekS1k</a
    >
  </div>
</template>
<script>
import { version } from "/package.json";
export default {
  data() {
    return {
      VersionProject: version,
    };
  },
};
</script>

<style>
.infoProg {
  margin: 0 auto;
  text-align: center;
}
</style>
