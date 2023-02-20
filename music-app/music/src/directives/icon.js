export default {
  //directive's lifecycle functions
  //beforeMount
  //mounted
  //beforeUpdate
  //updated
  //beforeUnmount
  //unmounted

  //hook arguments
  //el - element binding sits on
  //binding
  //vnode - node on virtual dom

  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value}   text-xl`;

    if (binding.arg == "full") {
      iconClass = binding.value;
    }

    if (binding.modifiers.right) {
      iconClass += " float-right";
    }

    if (binding.modifiers.yellow) {
      iconClass += "text-yellow-400";
    } else {
      iconClass += " text-green-400";
    }

    el.innerHTML += `<i class='${iconClass}' ></iclass=fa>`;
  },
};
