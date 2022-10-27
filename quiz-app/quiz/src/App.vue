<template>
  <div class="ctr">
    <transition>
      <Question
        v-if="questionsAnswered < questions.length"
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
      />
      <Result v-else :results="results" :totalCorrect="totalCorrect" />
    </transition>
    <button
      type="button"
      class="reset-btn"
      @click="reset"
      v-if="questionsAnswered === questions.length"
    >
      Reset
    </button>
  </div>
</template>

<script>
import Question from "./components/Question.vue";
import Result from "./components/Result.vue";
export default {
  name: "App",
  components: {
    Question,
    Result,
  },
  data() {
    return {
      questionsAnswered: 0,
      totalCorrect: 0,
      questions: [
        {
          q: "Wake the f*ck up samurai, we got...",
          answers: [
            {
              text: "to go to church",
              is_correct: false,
            },
            {
              text: "a city to burn",
              is_correct: true,
            },
            {
              text: "to clean our room",
              is_correct: false,
            },
            {
              text: "a test at noon",
              is_correct: false,
            },
          ],
        },
        {
          q: "Who said, You look like a f*ckable slab of meat?",
          answers: [
            {
              text: "Rouge",
              is_correct: false,
            },
            {
              text: "Johnny Silverhand",
              is_correct: false,
            },
            {
              text: "Adam Smasher",
              is_correct: true,
            },
            {
              text: "V",
              is_correct: false,
            },
          ],
        },
        {
          q: "Which is not a sub-district in Wattson?",
          answers: [
            {
              text: "Kabuki",
              is_correct: false,
            },
            {
              text: "Little China",
              is_correct: false,
            },
            {
              text: "Northside",
              is_correct: false,
            },
            {
              text: "Arroyo",
              is_correct: true,
            },
          ],
        },
        {
          q: "What did Johnny Silverhand deliver to Arasaka?",
          answers: [
            {
              text: "pizza",
              is_correct: false,
            },
            {
              text: "nuclear bomb",
              is_correct: true,
            },
            {
              text: "Adam Smasher's favorite t-shirt",
              is_correct: false,
            },
          ],
        },
      ],
      results: [
        {
          min: 0,
          max: 2,
          title: "My name is Davi-",
          desc: "*slaps* Nobody Asked",
        },
        {
          min: 4,
          max: 4,
          title: "Choom, You're Nova!",
          desc: "Its time to burn Night City",
        },
      ],
    };
  },
  methods: {
    questionAnswered(is_correct) {
      if (is_correct) {
        this.totalCorrect++;
      }
      this.questionsAnswered++;
    },
    reset() {
      this.totalCorrect = 0;
      this.questionsAnswered = 0;
      console.log('busy')
    },
  },
};
</script>