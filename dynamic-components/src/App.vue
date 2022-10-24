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
  <transition>
    <h2 v-if="flag">text inside</h2>
  </transition>
</template>

<style></style>
