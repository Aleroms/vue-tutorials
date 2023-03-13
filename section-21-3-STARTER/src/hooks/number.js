import { ref, computed, isRef, isReactive, reactive } from "vue";
//common practice to prefix functions with the word use.
export const useNumber = () => {
  //where you create options for composition api
  let num = ref(0);
  const accounts = reactive({
    checking: 1231,
    savings: 2323,
  });
  console.log(isRef(num));
  console.log(isReactive(accounts));

  function increment() {
    num.value++;
  }

  //returns reactive reference
  const double = computed(() => {
    return num.value * 2;
  });

  return { num, increment, double };
};
