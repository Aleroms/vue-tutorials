<template>
  <button type="button" @click="onClickAge">age up</button>
  <button type="button" @click="ageChangeFn(3)">age up cb</button>
  <p>the user is {{ age }} years old</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      //required: true,
      //default: 20
      validator(val) {
        return val < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-change"],
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>

<style scoped>
p {
  color: black;
}
</style>
