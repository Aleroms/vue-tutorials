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
  methods: {
    updateAge(num){
      this.age++;
    },
    updateAgeCB(num){
      return this.age += num;
    }
  }
};
</script>

<template>
  <Greeting :age="age" />
  <User :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"/>
  <p>{{ msg }}</p>
</template>

<style scoped>
p {
  color: red;
}
</style>
