import { ref, watchEffect } from "vue";
export const usePhrase = () => {
  const phrase = ref("");
  const reversedPhrase = ref("");

  //only watches phrase variable
  // watch([phrase], ([newVal, oldVal]) => {
  //   reversedPhrase.value = phrase.value.split("").reverse().join("");
  // });

  watchEffect(() => {
    reversedPhrase.value = phrase.value.split("").reverse().join("");
  });

  return { phrase, reversedPhrase };
};
