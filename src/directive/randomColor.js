import Vue from "vue";
const randomColor = Vue.directive("changeColor", function(el, binding) {
  el.style.color =
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  el.style.fontSize = binding.value.font
})

export default randomColor
