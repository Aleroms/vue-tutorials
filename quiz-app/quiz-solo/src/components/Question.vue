<script>
export default {
  name: "Question",
  props: ["questionsAnswered", "questions"],
  methods: {
    evaluateQuestion(is_correct) {
      this.$emit("response", is_correct);
    },
  },
  emits: ["response"],
};
</script>
<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar" :style="{width: `${this.questionsAnswered / this.questions.length * 100}%`}"></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="(question, index) in questions"
      :key="question.q"
    >
      <div class="question" v-if="index === questionsAnswered">
        {{ question.q }}
      </div>
      <div class="answers">
        <div
          class="answer"
          v-if="index === questionsAnswered"
          v-for="ans in question.answers"
          :key="ans.text"
          @click.prevent="evaluateQuestion(ans.is_correct)"
        >
          {{ ans.text }}
        </div>
      </div>
    </div>
  </div>
</template>
