
//Logic for Pizza Constructor
function Pizza(pSize, pSauce) {
  // this.id = id;
  this.pSize = pSize;
  this.pSauce = pSauce; //all = 1
  this.cheese = 0; //all = .50
  this.meat = 0; //all = 1.00
  this.topping = 0; //all = .25
  this.price = 0;

  // this.sizePrice = {
  //   Small: 3,
  //   Medium: 5,
  //   Large: 8,
  //   XLarge: 11
  // }

  // this.saucePrice = {
  //   Pesto: 1,
  //   Olive: 1,
  //   Red: 1
  // }

  // this.cheesePrice = {
  //   ricotta: .25,
  //   mozzarella: .25,
  //   parmesan: .25
  // }

  // this.meatPrice = {
  //   sausage: .50,
  //   prosciutto: 1.00,
  //   chicken: .50
  // }

  // this.toppingPrice = {
  //   spinach: .25,
  //   artichoke: .50,
  //   olives: .25
  // }
}


Pizza.prototype.sizePrice = function() {
  if (this.pSize === "Small" && this.cheese) {
    this.price += 3.00;
  } else if (this.pSize === "Medium") {
    this.price += 5.00;
  } else if (this.pSize === "Large") {
    this.price += 8.00;
  } else {
    this.price += 10.00;
  }
};

Pizza.prototype.saucePrice = function() {
  if (this.pSauce === "Pesto" || this.pSauce === "Olive" || this.pSauce === "Red") {
    this.price += 1.00;
  }
};

Pizza.prototype.cheesePrice = function() {
  if(document.getElementById("ricotta").checked) {
    this.cheese += 1;
    this.price = this.cheese;
  } if (document.getElementById("mozzarella").checked) {
    this.cheese += 1;
    this.price = this.cheese;
  } if(document.getElementById("parmesan").checked) {
    this.cheese += 1;
    this.price = this.cheese;
  }
}

$(document).ready(function() {
  $("form#formOne").submit(function() {
    event.preventDefault();

    var pSize = $("#pSize").val();
    var pSauce = $("#pSauce").val();
    cheese = [];
    meat = [];
    topping = [];

    $("input:checkbox[name=cheese]:checked").each(function() {
      cheese.push($(this).val());
    });

    $("input:checkbox[name=meat]:checked").each(function() {
      meat.push($(this).val());
    });

    $("input:checkbox[name=pTopping]:checked").each(function() {
      topping.push($(this).val());
    });

    var newPizza = new Pizza(pizzaId, pSize, pSauce, cheese, meat, topping);
    
    newPizza.totalCost();
    
    $('.orders').append("<li id=" + newPizza.pizzaId + ">" + (pizzaId + 1) + ". " + size + " " + sauce + "  pizza: $" + Pizza.totalCost.toFixed(2 + "</li>"));


  });

});

