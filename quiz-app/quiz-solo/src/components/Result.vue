<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">
      {{ results[resultIndex].desc }}<br />
      <p>{{ this.totalCorrect }} correct out of {{ this.length }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["results", "totalCorrect", "length"],
  computed: {
    resultIndex() {
      let index = 0;
      this.results.forEach((el, i) => {
        if (el.min <= this.totalCorrect && el.max >= this.totalCorrect)
          index = i;
      });
      return index;
    },
  },
};
</script>
