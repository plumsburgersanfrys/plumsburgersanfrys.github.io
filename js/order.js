const { randomShit } = require('./menu')
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
  if (entry = true) {
    if (entry = burgers) {
      burgersAmount += 1;
    }
    else if (entry = drinks) {
      drinksAmount += 1;
    }
    else if (entry = meals) {
      mealsAmount += 1;
    }
  }
}

var burgerPriceTotal = burgerPrice * burgersAmount;
var drinkPriceTotal = drinkPrice * drinksAmount;
var mealPriceTotal = mealPrice * mealsAmount;

var priceTotal = burgerPriceTotal + mealPriceTotal + drinkPriceTotal;
console.log(burgerPriceTotal);
console.log(drinkPriceTotal);
console.log(mealPriceTotal);
console.log(priceTotal);
console.log(allItems);
console.log(randomShit)