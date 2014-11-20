// ##4.) getAvailableProducts(array)
// Create function called `getAvailableProducts` that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
var data = require("./products.json")

var getAvailableProducts = function(array, available){
	var newArray = []
	 available = available.toLowerCase();
		for (var i = 0; i < array.length; i+=1) {
			if (array[i].product.inventories[0].availability.toLowerCase() === available) {
				newArray.push([array[i].product.googleId, array[i].product.inventories[0].availability]);
			}
		}
		return newArray;
	}
	console.log(getAvailableProducts(data.items, "inStock"));
