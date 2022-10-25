<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <TransitionGroup name="fade">
      <div
        class="single-question"
        v-for="(question, qi) in questions"
        :key="question.q"
        v-show="questionsAnswered === qi"
      >
        <div class="question">{{ question.q }}</div>
        <div class="answers">
          <div
            class="answer"
            v-for="ans in question.answers"
            :key="ans.text"
            @click.prevent="selectAnswer(ans.is_correct)"
          >
            {{ ans.text }}
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import { TransitionGroup } from "vue";

export default {
  name: "Question",
  props: ["questions", "questionsAnswered"],
  emits: ["question-answered"],
  methods: {
    selectAnswer(is_correct) {
      this.$emit("question-answered", is_correct);
    },
  },
  components: { TransitionGroup },
};
</script>
