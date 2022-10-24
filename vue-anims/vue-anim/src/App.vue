<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<template>
  <button type="button" @click="flag = !flag">Toggle</button>

  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">this is some text</h2>
    <h2 v-else key="secondary">not text</h2>
  </transition> -->
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
</style>
