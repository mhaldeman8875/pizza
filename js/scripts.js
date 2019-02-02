
//Logic for Pizza Constructor
function Pizza(id, pSize, pSauce, cheese, meat, topping) {
  this.id = id;
  this.pSize = pSize;
  this.pSauce = pSauce;
  this.cheese = cheese;
  this.meat = meat;
  this.topping = topping;
  this.totalCost = 0;

  this.sizePrice = {
    Small: 3,
    Medium: 5,
    Large: 8,
    XLarge: 11
  }

  this.saucePrice = {
    Pesto: 1,
    Olive: 1,
    Red: 1
  }

  this.cheesePrice = {
    ricotta: .25,
    mozzarella: .25,
    parmesan: .25
  }

  this.meatPrice = {
    sausage: .50,
    prosciutto: 1.00,
    chicken: .50
  }

  this.toppingPrice = {
    spinach: .25,
    artichoke: .50,
    olives: .25
  }
}
  Pizza.prototype.price = function() {
  
    this.totalCost += this.sizePrize[this.pSize];
    this.totalCost += this.saucePrice[this.pSauce];
    for (i=0; i<this.meat.length; i++) {
      price += this.meatPrice[this.meat[i]];
    }
    for (i=0; i<this.cheese.length; i++) {
      price += this.cheesePrice[this.cheese[i]];
    }
    for (i=0; i<this.topping.length; i++) {
      price += this.toppingPrice[this.topping[i]];
    }
    return this.totalCost
  };


// Pizza.prototype.price = function() {
//   if (this.pSize === "Small" && this.cheese) {
//     this.pSize.price = 3.00;
//   } else if (this.pSize === "Medium") {
//     this.pSize.price = 5.00;
//   } else if (this.pSize === "Large") {
//     this.pSize.price = 8.00;
//   } else {
//     this.pSize.price = 10.00;
//   }
// }

$(document).ready(function() {
  $("form#formOne").submit(function() {
    event.preventDefault();

    var pSize = $("#pSize").val();
    var pSauce = $("pSauce").val();
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

