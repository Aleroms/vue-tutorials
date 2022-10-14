<script>
import AppForm from "./components/Form.vue";
export default {
  name: "App",
  components: { AppForm },
};
</script>

<template>
  <AppForm>
    <template v-slot:help>this is help text</template>
    <template v-slot:fields>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="email" />
    </template>
    <template v-slot:buttons>
      <button type="submit">submit</button>
    </template>
    <p>dummy txt</p>
  </AppForm>
  <AppForm>
    <template v-slot:help>Contact form</template>
    <template v-slot:fields>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="message" />
    </template>
    <template v-slot:buttons>
      <button type="submit">submit</button>
    </template>
  </AppForm>
</template>
