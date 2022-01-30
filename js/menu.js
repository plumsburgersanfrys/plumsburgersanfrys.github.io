// const burgers = [hambrbregur,booger,crappyBurger];
// const drinks = [pop,goodDewrinskwa,whiskey,crapyDrink];
// const meals = [totalyGudMeal,mealalsjminsanfasf,crappyMeal,yesMeal];
// const allItems = [meals,drinks,burgers];

// // burgers
// var hambrbregur;
// var booger;
// var crappyBurger;
// // drinks
// var pop;
// var goodDewrinskwa;
// var whiskey;
// var crapyDrink;
// // meals
// var totalyGudMeal;
// var mealalsjminsanfasf;
// var crappyMeal;
// var yesMeal;

if (location.pathname === "/menu/page/1.html") {
  var clean_uri = location.protocol + "//" + location.host + "/menu/#1";
  window.history.replaceState({}, document.title, clean_uri);
} else if (location.pathname === "/menu/page/2.html") {
  var clean_uri = location.protocol + "//" + location.host + "/menu/#2";
  window.history.replaceState({}, document.title, clean_uri);
}

console.log(window.location.pathname === "/menu/")
console.log(location.hash)
console.log(window.location.pathname)

var newpathname = location.pathname + location.hash
console.log(newpathname)
var is1 = newpathname === "/menu/#1"
var pre = document.referrer + location.hash
var newhref = location.href
console.log(is1)

console.log(pre)

console.log("new href " + newhref)

console.log(pre !== newhref)

if (newpathname === "/menu/#1" && pre !== window.location.href) {
  window.location.href = "/menu/page/1.html"
} else if (newpathname === "/menu/#2" && pre !== window.location.href) {
  window.location.href = "/menu/page/2.html"
} else if (newpathname === "/menu/") {
  window.location.href = "/menu/page/1.html"
}
setTimeout(() => {
  if (newpathname === "/menu/#1" && document.getElementById('pageloaded') === null) {
    window.location.href = "/menu/page/1.html"
  }
  if (newpathname === "/menu/#2" && document.getElementById('pageloaded2') === null) {
    window.location.href = "/menu/page/2.html"
  }
}, 500);

