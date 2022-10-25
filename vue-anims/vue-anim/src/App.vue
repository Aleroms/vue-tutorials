<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("before element is called", el);
    },
    enter(el) {
      console.log("enter is called", el);

      //saves the returned anim
      // const anim = el.animate([{ transform: "scale3d(0,0,0)" }, {}]);
      // anim.onfinish = () => {
      //   done();
      // };
    },
    afterEnter(el) {
      console.log("after enter element is called", el);
    },
    beforeLeave(el) {
      console.log("before leave element is called", el);
    },
    leave(el) {
      console.log("leave element is called", el);

      // const anim = el.animate([{}, { transform: "scale3d(0,0,0)" }], {
      //   duration: 1000,
      // });
      // anim.onfinish = () => {
      //   done();
      // };
    },
    afterLeave(el) {
      console.log("after leave element is called", el);
    },
    addItem() {
      const rand = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, rand);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>

<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <button type="button" @click="addItem">Add</button>

  <ul>
    <!-- parenthesis are necessary to extract index -->
    <transition-group 
    name="fade"
    enter-active-class="animate__animated animate__flipInX"
    leave-active-class="animate__animated animate__flipOutX">
      <li
        v-for="(num, index) in numbers"
        v-bind:key="num"
        @click="removeItem(index)"
      >
        {{ num }}
      </li>
    </transition-group>
  </ul>
  <!-- TRANSITION TAG ONLY WORKS FOR SINGLE ELEMENT!!!
  <transition></transition> -->

  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">this is some text</h2>
    <h2 v-else key="secondary">not text</h2>
  </transition> -->

  <!-- <Transition name="zoom">
    <h2 v-if="flag">text</h2>
  </Transition> -->
  <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade"
  >
    <h2 v-if="flag">javascript hooks</h2>
  </transition> -->
</template>

<style scoped>
.animate__flipOutX{
  position: absolute;
}
.animate__animated{
  animation-duration: 1.5s;
}
li {
  font-size: 22px;
  list-style: none;
  cursor: pointer;
}
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
.fade-move{
  transition: all 0.3s linear;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
.fade-leave-active{
  position: absolute;
}
.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}
.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}
.zoom-leave-to {
  opacity: 0;
}
.zoom-enter-from {
  opacity: 0;
}
@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
