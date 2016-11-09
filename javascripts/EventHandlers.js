"use strict";
// second iife -- all event handlers
var edit;
var selectedEl;

var Carlot = (function(oldCarlot) {
  //name the function 'activateEvents'
  oldCarlot.activateEvents = function(element, eventType, callbackFn) {
    element.addEventListener(eventType, callbackFn);
  };

  oldCarlot.CardClick = function(event) {
    let cars = document.getElementsByClassName("card");
    for (let i = 0; i < cars.length; i++) {
      if (cars[i] === event.currentTarget) {
        Carlot.setCustom(cars[i], "#FDF3E7");
      } else {
        Carlot.setStandard(cars[i]);
      }
    }
    selectedEl = event.currentTarget.getElementsByTagName('edit')[0];
    edit.value = [];
    edit.focus();
  };
  oldCarlot.textInput = function(event) {
    selectedEl.innerHTML = edit.value;
  };
  return oldCarlot;

})(Carlot || {});
