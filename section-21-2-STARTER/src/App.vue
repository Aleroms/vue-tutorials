<template>
  <div id="app">
    <div class="scrollPosition">{{ offset }}</div>
  </div>
</template>

<script>
//components don't share mixin data
import mixin from "@/mixin.js";
export default {
  name: "App",
  mixins: [mixin],
  data() {
    return {
      offset: 0,
    };
  },
  mounted() {
    console.log("app mounted lifecycle function");
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 3000px;
  position: relative;
}

.scrollPosition {
  position: fixed;
  left: 10px;
  right: 10px;
}
</style>
