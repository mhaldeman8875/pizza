//business logic

//pizza constructor 
function Pizza(pSize, pSauce) {
  // this.id = id;
  this.pSize = pSize,
  this.pSauce = pSauce, 
  this.cheeses = [],
  this.meats = [],
  this.toppings = [],
  this.price = 0,
  this.saucePrice = 0,
  this.meatPrice = 0,
  this.cheesePrice = 0,
  this.toppingPrice = 0
}

// prototypes 
Pizza.prototype.addCheese = function(cheese) {
  this.cheeses.push(cheese);
}

Pizza.prototype.addMeat = function(meat) {
  this.meats.push(meat);
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.sizeCost = function() {
  if (this.pSize === "Small") {
    this.price = 3.00;
  } else if (this.pSize === "Medium") {
    baseprice = 5.00;
  } else if (this.pSize === "Large") {
    this.price = 8.00;
  } else if (this.pSize === "XLarge") {
    this.price = 10.00;
  };
  return this.price;
}

Pizza.prototype.sauceCost = function() {
  if (this.pSauce === "Pesto" || this.pSauce === "Olive" || this.pSauce === "Red") {
    this.saucePrice = 1.00;
  }
}

Pizza.prototype.cheeseCost = function() {
  if(document.getElementById("ricotta").checked) {
    this.cheesePrice += 1;
  } if(document.getElementById("mozzarella").checked) {
    this.cheesePrice += 1;
  } if(document.getElementById("parmesan").checked) {
    this.cheesePrice += 1;
  }
}

Pizza.prototype.meatCost = function() {
  if(document.getElementById("sausage").checked) {
    this.meatPrice += 1;
  } if (document.getElementById("prosciutto").checked) {
    this.meatPrice += 1.50;
  } if(document.getElementById("chicken").checked) {
    this.meatPrice += 1;
  }
}

Pizza.prototype.toppingCost = function() {
  if(document.getElementById("spinach").checked) {
    this.toppingPrice += .50;
  } if (document.getElementById("artichoke").checked) {
    this.toppingPrice += 1;
  } if(document.getElementById("olives").checked) {
    this.toppingPrice += 1;
  }
}

Pizza.prototype.totalCost = function() {
  return this.price += this.saucePrice += this.cheesePrice += this.meatPrice += this.toppingPrice;
}

//user interface logic
var newPizza = new Pizza();
$(document).ready(function() {
  $("form#formOne").submit(function() {
    event.preventDefault();

    var pSize = $("#pSize").val();
    var pSauce = $("#pSauce").val();
    var pCheese = [];
    var pMeat = [];
    var pTopping = [];

    $("input:checkbox[name=cheese]:checked").each(function() {
      pCheese.push($(this).val());
    });

    $("input:checkbox[name=meat]:checked").each(function() {
      pMeat.push($(this).val());
    });

    $("input:checkbox[name=pTopping]:checked").each(function() {
      pTopping.push($(this).val());
    });

    var newPizza = new Pizza(pSize, pSauce, pCheese, pMeat, pTopping);
    newPizza.addCheese(pCheese);
    newPizza.addMeat(pMeat);
    newPizza.addTopping(pTopping)

    newPizza.sizeCost();
    newPizza.sauceCost();
    newPizza.cheeseCost();
    newPizza.meatCost();
    newPizza.toppingCost();
    newPizza.totalCost();
    
    $('.total').text("Thank you for your order, your total is: " + newPizza.totalCost().toFixed(2));


  })

})

