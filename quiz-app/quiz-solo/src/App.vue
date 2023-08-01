<script>
import Result from "./components/Result.vue";
import Question from "./components/Question.vue";
import QUESTION_DATA from "./assets/data/questions.json";
import RESULTS_DATA from "./assets/data/results.json";
export default {
  name: "App",
  components: {
    Result,
    Question,
  },
  methods: {
    judgeQuestion(is_correct) {
      if (is_correct) {
        this.totalCorrect++;
      }
      this.questionsAnswered++;
    },
    reset() {
      this.totalCorrect = 0;
      this.questionsAnswered = 0;
    },
  },
  data() {
    return {
      questionsAnswered: 0,
      totalCorrect: 0,
      QUESTION_DATA,
      RESULTS_DATA,
    };
  },
};
</script>

<template>
  <div class="ctr">
    <Question
      :questionsAnswered="questionsAnswered"
      :questions="QUESTION_DATA.questions"
      @response="judgeQuestion"
      :totalCorrect="totalCorrect"
    />
    <Result
      v-show="questionsAnswered === QUESTION_DATA.questions.length"
      :results="RESULTS_DATA.results"
      :totalCorrect="totalCorrect"
      :length="QUESTION_DATA.questions.length"
    />
    <button type="button" class="reset-btn" @click="reset">Reset</button>
  </div>
</template>
