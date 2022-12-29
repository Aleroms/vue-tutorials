import { defineStore } from "pinia";
//an object that will keep track of states

export default defineStore("modal", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      //required to return a value
      return !state.isOpen ? "hidden" : "";
    },
  },
});
