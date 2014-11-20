// ##3.) getItemsByAuthor(array, author)
// Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.

// Test this function by searching for Target, CDW, eBay

var data = require("./products.json")

var getItemsByAuthor = function(array, desiredAuthor){
	var newArray = []
	 desiredAuthor = desiredAuthor.toLowerCase();
		for (var i = 0; i < array.length; i+=1) {
			if (array[i].product.author.name.toLowerCase() === desiredAuthor) {
				newArray.push([array[i].product.googleId, array[i].product.author.name]);
			}
		}
		return newArray;
	}
	console.log(getItemsByAuthor(data.items, "Target"));
	console.log(getItemsByAuthor(data.items, "CDW"));
	console.log(getItemsByAuthor(data.items, "eBay"));