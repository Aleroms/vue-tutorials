<template>
  <div id="app">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ante
      dignissim, vulputate lectus id, lobortis justo. Aliquam sit amet
      scelerisque risus, non porta lorem. Maecenas ornare odio purus, id
      consequat ligula aliquam sit amet. Nam sit amet efficitur sem. Etiam
      finibus erat id ligula ornare fringilla. Suspendisse potenti. Duis eu
      molestie felis. Suspendisse eu vestibulum turpis. Pellentesque venenatis
      lacus lectus, a fringilla est pretium ac. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Phasellus mattis
      massa id pretium efficitur. Ut consequat elit sed dapibus fermentum.
      Suspendisse sed ipsum vel arcu tincidunt finibus ut sed est. Suspendisse
      venenatis pharetra enim, gravida aliquam risus sagittis et. Nullam gravida
      fringilla tortor. Quisque ornare gravida arcu.
    </p>
    <div class="mt-2 ml-2">
      <button type="button" class="btn btn-primary" @click="open = true">
        Open
      </button>
    </div>

    <app-modal :show="open" @hide="open = false" />
  </div>
</template>

<script>
import AppModal from "@/components/Modal.vue";

export default {
  name: "App",
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

<style src="bootstrap/dist/css/bootstrap.css"></style>
