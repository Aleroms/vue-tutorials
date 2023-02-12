<template>
  <Heading />

  <router-view></router-view>
  <AppPlayer />
  <Auth />
</template>

<script>
import Heading from "@/components/Header.vue";
import Auth from "./components/Auth.vue";
import AppPlayer from "@/components/Player.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";
export default {
  name: "App",
  components: {
    Heading,
    Auth,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>
