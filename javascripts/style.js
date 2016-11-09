"use strict";
// final iife
var Carlot = (function(oldCarlot) {

  oldCarlot.setCustom = function(el, color) {
    // change border thickness element and background color
    el.style.backgroundColor = color;
    el.style.border = "2px solid black";
  };

  oldCarlot.setStandard = function(el) {
    // resets border thickness and background color to original values
    el.style.backgroundColor = "#7E8F7C";
    el.style.border = "1px solid black";
    el.style.shadowDrop = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  };

  return oldCarlot;

})(Carlot || {});
