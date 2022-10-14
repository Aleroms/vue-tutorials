<script>
//https://vue-loader.vuejs.org/guide/scoped-css.html#scoped-css
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "greetings human",
    };
  },
};
</script>

<template>
  <p v-if="age >= 25">you must be older than 25 to view this message</p>
  <p v-else>you are less than 25</p>
</template>

<style scoped lang="scss">
h1 {
  color: green;

  span {
    color: blue;
  }
}
</style>
