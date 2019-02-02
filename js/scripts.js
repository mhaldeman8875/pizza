//Business Logic


//Logic for Pizza Constructor
function Pizza(pSize, pSauce, pCheese, pMeat, pTopping) {
  
  this.pSize = pSize,
  this.pSauce = pSauce,
  this.pCheese = pCheese,
  this.pMeat = pMeat,
  this.pTopping = pTopping

  this.sizePrice = {
    Small: 3,
    Medium: 5,
    Large: 8,
    XLarge: 11
  }

  this.saucePrice = {
    Any: 1.00
  }

  this.cheesePrice = {
    Ricotta: .25,
    Mozzarella: .25,
    Parmesan: .25
  }

  this.meatPrice = {
    Sausage: .50,
    Prosciutto: 1.00,
    Chicken: .50
  }

  this.toppingPrice = {
    Spinach: .25,
    Artichoke: .50,
    Olives: .25
  }
}

Pizza.prototype.price = function() {
  var price = 0;
  price += this.sizePrize[this.pSize];
  price += this.saucePrice[this.pSauce];
  for (i=0; i<this.pMeat.length; i++) {
    price += this.meatPrice[this.pMeat[i]];
  }
  for (i=0; i<this.pCheese.length; i++) {
    price += this.cheesePrice[this.pCheese[i]];
  }
  for (i=0; i<this.pTopping.length; i++) {
    price += this.toppingPrice[this.pTopping[i]];
  }
  return price;
}

var newPizza = new Pizza();
// user logic
$(document).ready(function() {
  $("form#formOne").submit(function() {
    event.preventDefault();

    var sizeInput = $("#pSize").val();
    var sauceInput = $("pSauce").val();
    cheeseInput = [];
    eatInput = [];
    toppingInput = [];

    $("input:checkbox[name=cheese]:checked").each(function() {
      cheeseInput.push($(this).val())
    });

    $("input:checkbox[name=meat]:checked").each(function() {
      meatInput.push($(this).val())
    });

    $("input:checkbox[name=pTopping]:checked").each(function() {
      toppingInput.push($(this).val())
    });

    var newPizza = new Pizza(pSize, pSauce, pCheese, pMeat, pTopping, pTopping);

    $(".pizzaSize").append(sizeInput);

  })
})


