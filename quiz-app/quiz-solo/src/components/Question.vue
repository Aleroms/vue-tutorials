<script>
export default {
  name: "Question",
  props: ["questionsAnswered", "questions"],
  methods: {
    evaluateQuestion(choice, is_correct) {
      const res = choice === is_correct;
      this.$emit("response", res);
    },
  },
  emits: ["response"],
  created() {
    console.log("received message prop:", this.questions);
  },
};
</script>
<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{
          width: `${(this.questionsAnswered / this.questions.length) * 100}%`,
        }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="(question, index) in questions"
      :key="question.question"
    >
      <div class="question" v-if="index === questionsAnswered">
        {{ question.question }}
      </div>
      <div class="answers">
        <div
          class="answer"
          v-if="index === questionsAnswered"
          v-for="choice in question.choices"
          :key="choice"
          @click.prevent="evaluateQuestion(choice, question.correct_answer)"
        >
          {{ choice }}
        </div>
      </div>
    </div>
  </div>
</template>
