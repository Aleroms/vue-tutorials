const vm = Vue.createApp({
  data() {
    return {
      firstname: "Santiago",
      lastname: "Morales",
      url: 'https://google.com'
    };
  },
  methods: {
    fullName(){
      return this.firstname + ' ' + this.lastname;
    }
  }
}).mount("#app");

// setTimeout(()=>{
//   vm.firstname = 'bob';
// },2000);

//data 
//  - A function that returns the initial reactive state for the component instance.
//https://vuejs.org/api/options-state.html#data

