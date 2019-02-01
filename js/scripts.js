//Business Logic


//Logic for Pizza Constructor
function Pizza() {
  
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

  this.saucePrice = 1.00

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
  price += this.saucePrice[this.p];

  for (var i=0; i<this.pMeat.length; i++) {
    price += this.meatPrice[this.pMeat[i]];
  }

  for (var i=0; i<this.pCheese.length; i++) {
    price += this.cheesePrice[this.pCheese[i]];
  }
  
  for (var i=0; i<this.pTopping.length; i++) {
    price += this.toppingPrice[this.pTopping[i]];
  }

  return price;
}



