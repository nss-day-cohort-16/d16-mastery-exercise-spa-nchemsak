'use strict';
// first iife

console.log("First line time:", (Date.now()));

var Carlot = (function(oldCarlot) {
  let inventory = [];

  // name function loadInventory to load inventory.json file
  oldCarlot.loadInventory = function(callback) {

    let inventoryLoader = new XMLHttpRequest();
    inventoryLoader.open("GET", "data/inventory.json");
    inventoryLoader.send();

    inventoryLoader.addEventListener("load", function() {
      let data = JSON.parse(inventoryLoader.responseText);
      inventory = data.cars;
      callback(inventory);
    });
  };

  oldCarlot.getInventory = function() {
    return inventory;
  };

  return oldCarlot;

})(Carlot || {});
