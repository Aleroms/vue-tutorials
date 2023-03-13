<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>
    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{ reversedPhrase }}</p>

    <Alert :user="user" />

    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import Alert from "@/components/Alert.vue";
import { useNumber } from "./hooks/number";
import { usePhrase } from "./hooks/phrase";

//being observered for changes
const btn = ref(null);

onBeforeMount(() => {
  console.log("before mounted");
});
onMounted(() => {
  console.log(" mounted");

  btn.value.addEventListener("click", () => {
    console.log("btn pressed");
  });
});

const user = reactive({
  name: "santiago",
  age: 25,
});

setTimeout(() => {
  user.name = "james";
});

const { phrase, reversedPhrase } = usePhrase();
const { num, increment, double } = useNumber();
const { name } = toRefs(user);
</script>
