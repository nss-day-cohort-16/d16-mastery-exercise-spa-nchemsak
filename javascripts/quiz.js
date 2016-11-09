'use strict';
var main = document.getElementById('main');
var edit = document.getElementById('edit');
var Carlot;

Carlot.loadInventory(load);
Carlot.activateEvents(edit, "keyup", Carlot.textInput);

function load(inventory) {
  let card;
  let row;
  let div;

  inventory.forEach(function(car, num) {
    if (num % 3 < 1) {
      row = document.createElement("div");
      main.appendChild(row);
      row.setAttribute("class", "container row col-md-12");
    }
    div = document.createElement("div");
    div.setAttribute("class", "card col-md-3 panel");
    row.appendChild(div);

    let price = parseFloat(car.price);
    card = `<div class="panel-heading"><h2>${car.year}<br> ${car.make} ${car.model}</h2></div><p>
              <div class="panel-body"><h2 class="price">$ ${price}</h2></div><p>
              <div class="panel-footer"><edit><p class="scroller">${car.description}</p></edit></div>`;
    div.innerHTML = card;
    Carlot.setStandard(div);
    Carlot.activateEvents(div, "click", Carlot.CardClick);
  });
}

console.log("Last line time: ", (Date.now()));
