const burgers = [hambrbregur,booger,crappyBurger];
const drinks = [pop,goodDewrinskwa,whiskey,crapyDrink];
const meals = [totalyGudMeal,mealalsjminsanfasf,crappyMeal,yesMeal];
const allItems = [meals,drinks,burgers];

var burgersAmount = 0;
var mealsAmount = 0;
var drinksAmount = 0;
// burgers
var hambrbregur;
var booger;
var crappyBurger;
// drinks
var pop;
var goodDewrinskwa;
var whiskey;
var crapyDrink;
// meals
var totalyGudMeal;
var mealalsjminsanfasf;
var crappyMeal;
var yesMeal;

var burgerPrice = 4.99;
var drinkPrice = 2.50;
var mealPrice = 9.99;
var specialPrice = 7.50;

for (entry in allItems) {
  for (entry in burgers) {
    if (entry === true) {
      burgersAmount += 1
    }
  }
  for (entry in drinks) {
    if (entry === true) {
      drinksAmount += 1
    }
  }
  for (entry in meals) {
    if (entry === true) {
      mealsAmount += 1
    }
  }
}


var burgerPriceTotal = burgerPrice * burgersAmount;
var drinkPriceTotal = drinkPrice * drinksAmount;
var mealPriceTotal = mealPrice * mealsAmount;

var priceTotal = burgerPriceTotal + mealPriceTotal + drinkPriceTotal;
console.log(priceTotal);

function orderButtonIsPressed(obj) {
    if (obj.value == "Order") obj.value = "Ordered";
    else obj.value = "Order";
}
function checkoutOrder() {
  document.getElementById('opaque1').style.opacity = "1";
  document.getElementById('opaque2').style.opacity = "1";
  document.getElementById('opaque3').style.opacity = "1";
  var waitTime = Math.floor((Math.random() * 15000) + 6000)
  setTimeout(() => {  document.write(`<title>Error</title><p style="text-align: center;">An unknown error occurred whilst trying to complete purchase, try again later.</p>`); }, waitTime);
}