var burgersAmount = 0;
var mealsAmount = 0;
var drinksAmount = 0;
var specialsAmount = 0;

var burgerPrice = 4.99;
var drinkPrice = 2.50;
var mealPrice = 9.99;
var specialPrice = 7.50;

var burgerPriceTotal = burgerPrice * burgersAmount;
var drinkPriceTotal = drinkPrice * drinksAmount;
var mealPriceTotal = mealPrice * mealsAmount;

var priceTotal = burgerPriceTotal + mealPriceTotal + drinkPriceTotal;
console.log(priceTotal);

function orderButtonIsPressed(obj) {
  if (obj.value == "Order"){
    obj.value = "Ordered";
    if (obj.classList[1] === "burgerorder") {
      burgersAmount++;
    }
    if (obj.classList[1] === "drinkorder") {
      drinksAmount++;
    }
    if (obj.classList[1] === "mealorder") {
      mealsAmount++;
    }
    if (obj.classList[1] === "specialorder") {
      specialsAmount++;
    }
  } else {
    obj.value = "Order"
    if (obj.classList[1] === "burgerorder") {
      burgersAmount--;
    }
    if (obj.classList[1] === "drinkorder") {
      drinksAmount--;
    }
    if (obj.classList[1] === "mealorder") {
      mealsAmount--;
    }
    if (obj.classList[1] === "specialorder") {
      specialsAmount--;
    }
  }
  changeMoneyDue()
}

function checkoutOrder() {
  document.getElementById('opaque2').style.opacity = "1"
  document.getElementById('proccessing-box-order-maindiv').style.animation = "order-index-proccessing-box-anim ease-out 0.6s forwards";
  document.getElementById('order-progress-value').style.animation = "order-index-progress-fill-anim ease-out 2s infinite";
  var waitTime = Math.floor((Math.random() * 15000) + 6000);
  setTimeout(() => {  document.write(`<title>Error</title><p style="text-align: center;">An unknown error occurred whilst trying to complete purchase, try again later.</p>`); }, waitTime);
}

//var totalMoneyDue = document.getElementById('money-count')

function changeMoneyDue() {
  var burgerPriceTotal = burgerPrice * burgersAmount;
  var drinkPriceTotal = drinkPrice * drinksAmount;
  var mealPriceTotal = mealPrice * mealsAmount;
  var specialPriceTotal = specialPrice * specialsAmount;

  var priceTotal = burgerPriceTotal + mealPriceTotal + drinkPriceTotal + specialPriceTotal;

  var priceTotal = priceTotal.toFixed(2)

  document.getElementById("moneycount").innerHTML = priceTotal;
}