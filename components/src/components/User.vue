<template>
  <p>the user is {{ age }} years old</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
};
</script>

<style scoped>
p {
  color: black;
}
</style>
