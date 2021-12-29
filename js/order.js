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

var burgerPrice = 5.00;
var drinkPrice = 2.50;
var mealPrice = 10.00;
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

var orderbutton = document.getElementById('orderburger')

function orderButtonIsPressed() {
  if (document.getElementById('orderbutton').value == "Order") document.getElementById('orderbutton').value = "Ordered";
  else document.getElementById('orderbutton').value = "Order";
}