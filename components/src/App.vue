<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "hello world",
      age: 20,
    };
  },
  components: {
    Greeting,
    User,
  },
};
</script>

<template>
  <Greeting :age="age" />
  <User :age="age" />
  <p>{{ msg }}</p>
</template>

<style scoped>
p {
  color: red;
}
</style>
