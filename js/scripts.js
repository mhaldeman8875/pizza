//business logic

//pizza constructor 
function Pizza(pSize, pSauce) {
  // this.id = id;
  this.pSize = pSize;
  this.pSauce = pSauce; //all = 1
  this.cheese = 0; //all = .50
  this.meat = 0; //all = 1.00
  this.topping = 0; //all = .25
  this.price = 0
}

// prototypes 
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
}

Pizza.prototype.saucePrice = function() {
  if (this.pSauce === "Pesto" || this.pSauce === "Olive" || this.pSauce === "Red") {
    this.price += 1.00;
  }
}

Pizza.prototype.cheesePrice = function() {
  if(document.getElementById("ricotta").checked) {
    this.cheese += 1;
    this.price += this.cheese;
  } if (document.getElementById("mozzarella").checked) {
    this.cheese += 1;
    this.price += this.cheese;
  } if(document.getElementById("parmesan").checked) {
    this.cheese += 1;
    this.price += this.cheese;
  }
}

Pizza.prototype.meatPrice = function() {
  if(document.getElementById("sausage").checked) {
    this.meat += 1;
    this.price += this.meat;
  } if (document.getElementById("prosciutto").checked) {
    this.meat += 1.50;
    this.price += this.meat;
  } if(document.getElementById("chicken").checked) {
    this.meat += 1;
    this.price += this.meat;
  }
}

Pizza.prototype.toppingPrice = function() {
  if(document.getElementById("spinach").checked) {
    this.topping += .50;
    this.price += this.topping;
  } if (document.getElementById("artichoke").checked) {
    this.topping += 1.00;
    this.price += this.topping;
  } if(document.getElementById("olives").checked) {
    this.topping += 1;
    this.price += this.topping;
  }
}

//user interface logic

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

    var newPizza = new Pizza(pSize, pSauce, cheese, meat, topping);
    
    newPizza.sizePrice();
    newPizza.saucePrice();
    newPizza.cheesePrice();
    newPizza.meatPrice();
    newPizza.toppingPrice();
    
    $('.total').text("Thank you for your order, your total is: " + newPizza.price.toFixed(2));


  });

});

