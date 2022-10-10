const vm = Vue.createApp({
  data() {
    return {
      firstname: "Santiago",
      middleName: "",
      lastname: "Morales",
      url: "https://google.com",
      raw_url: '<a href="https://google.com">Google</a>',
      age: 20,
    };
  },
  methods: {
    
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      //console.log(msg);
      this.lastname = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("full name computed property method was called");
      return `${this.firstname} ${this.middleName} ${this.lastname}`;
    }
  },
  watch: {
    age(newVal, oldVal){
      setTimeout(()=>{
        this.age = 20;
      },1000);
    }
  }
});

vm.mount("#app");

// setTimeout(()=>{
//   vm.firstname = 'bob';
// },2000);

//data
//  - A function that returns the initial reactive state for the component instance.
//https://vuejs.org/api/options-state.html#data
