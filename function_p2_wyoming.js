// ##2.) getItemsByBrand(array, brand)
// Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.

// Test this function by searching for Sony, Cannon, Nikon and Panasonic.
var data = require("./products.json")

var getItemsByBrand = function(array, desiredBrand){
	var brandTwo = []
	 desiredBrand = desiredBrand.toLowerCase();
		for (var i = 0; i < array.length; i+=1) {
			if (array[i].product.brand.toLowerCase() === desiredBrand) {
				brandTwo.push([array[i].product.googleId, array[i].product.title]);
			}
		}
		return brandTwo;
	}
	console.log(getItemsByBrand(data.items, "Panasonic"));
	console.log(getItemsByBrand(data.items, "Sony"));
	console.log(getItemsByBrand(data.items, "Canon"));
	console.log(getItemsByBrand(data.items, "Nikon"));	

	// we created our function with two parameters
	// inside our function we created a variable with an empty array to push our data to
	// we took our variable called desiredBrand and converted the data to toLowerCase
	// we took our for loop begining from early where we count and return the length our array in our required variable
	// we made an if statement that retrieves the piece of data of the product and the brand makes it toLowerCase
	// we then compared the array item to our desiredBrand to see if its equal
	// if it is we push the array data to our new array along with googleId and title for easier identification
	// return our new array after the for loop is closed and we print the results of each brand search to our console