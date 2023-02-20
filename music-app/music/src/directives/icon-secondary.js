export default {
  //uses object syntax instead of modifiers
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-green-400  text-xl`;

    if (binding.value.right) {
      iconClass += " float-right";
    }

    el.innerHTML += `<i class='${iconClass}' ></iclass=fa>`;
  },
};
