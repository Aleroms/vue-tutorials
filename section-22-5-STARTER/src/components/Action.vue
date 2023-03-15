<template>
  <div class="mt-2 ml-2">
    <button type="button" class="btn btn-primary" @click="open = true">
      Open
    </button>
    <Teleport to="body"
      ><app-modal :show="open" @hide="open = false"
    /></Teleport>
  </div>
</template>

<script>
import AppModal from "@/components/Modal.vue";
export default {
  name: "AppAction",
  components: {
    AppModal,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>
