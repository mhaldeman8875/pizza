var pizzas = [];
var pizzaId = 0;


var showTotal = function() { 
  var price = 0;
  pizzas.forEach(function(pizza) {
    price += pizza.price();
  });
  $('#total').empty();
  $('#total').append(
    "Subtotal: $" + price.toFixed(2) +
    "<br>Tax: $" + price.tax() +
    "<br>Total: $" + price.totalPrice(price.tax())
  );
}

Pizza.prototype.tax = function() {// computes tax from the subtotal of price()
  return parseFloat((this * .095).toFixed(2));
};

Pizza.prototype.totalPrice = function(tax) {// computer the total using the tax prototype
  return  parseFloat((this + tax).toFixed(2));
};


// user logic

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

    pizzas.push(newPizza);


    $('.orders').append("<li id=" + pizzaId + ">" + (pizzaId + 1) + ". " + size + " " + sauce + "  pizza: $" + newPizza.price().toFixed(2) + "]</li>");

    pizzaId++;
    
    showTotal();
  });

});

