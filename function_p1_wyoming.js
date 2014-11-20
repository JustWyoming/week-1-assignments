// // wyoming_google_shop_homework
// #Problems

// ##1.) getItems(array)

// Create a function called `getItems` that simply returns the items array from the google product object.
//load products.json
var data = require("./products.json")

//define getItemsCount function
var getItemsCount = function (items) {
	return data.items;
}
console.log(getItemsCount());