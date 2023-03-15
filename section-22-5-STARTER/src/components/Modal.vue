<template>
  <div class="modal" :style="{ display: show ? 'block' : 'none' }">
    <div
      class="modal-dialog"
      style="z-index: 2000"
      @keydown.esc="close"
      tabindex="0"
      ref="modal"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Awesome Title</h5>
          <button type="button" class="close" @click="close">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Awesome content.</p>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: ["show"],
  methods: {
    close() {
      console.log("emitting event");
      this.$emit("hide");
    },
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.$refs.modal.focus();
      }
    },
  },
};
</script>
<style>
.modal-dialog {
  outline: 0;
}
</style>
