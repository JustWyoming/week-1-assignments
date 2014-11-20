// //load products.json
// var data = require("./products.json")

// //define getItemsCount function
// var getItemsCount = function (items) {
// 	return data.items;
// }
// console.log(getItemsCount());
//accepts full item data
//returns the length of the items array
// var data = require("./products.json")

// var getItemsByBrand = function(array, desiredBrand){
// 	var brandTwo = []
// 	 desiredBrand = desiredBrand.toLowerCase();
// 		for (var i = 0; i < array.length; i+=1) {
// 			if (array[i].product.brand.toLowerCase() === desiredBrand) {
// 				brandTwo.push([array[i], array[i].product.title]);
// 			}
// 		}
// 		return brandTwo;
// 	}
	
// 	console.log(getItemsByBrand(data.items, "Sony"));
	
// 	console.log(getItemsByBrand(data.items, "Nikon"));	
	
	

	// we created our function with two parameters
	// inside our function we created a variable with an empty array to push our data to
	// we took our variable called desiredBrand and converted the data to toLowerCase
	// we took our for loop begining from early where we count and return the length our array in our required variable
	// we made an if statement that retrieves the piece of data of the product and the brand makes it toLowerCase
	// we then compared the array item to our desiredBrand to see if its equal
	// if it is we push the array data to our new array along with googleId and title for easier identification
	// return our new array after the for loop is closed and we print the results of each brand search to our console

var data = require("./products.json");


var getItemsByBrand = function(arr, desiredBrand) {
    desiredBrand = desiredBrand.toLowerCase();
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].product.brand.toLowerCase() === desiredBrand) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}



var getItemsByAuthor = function(arr, author) {
    author = author.toLowerCase();
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].product.author.name.toLowerCase().search(author) !== -1) {
            newArray.push([arr[i].product.author, arr[i].product.brand]);
        }
    }
    return newArray;
}

var getAvailableProducts = function(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].product.inventories[0].availability === "inStock") {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// var items1 = getItemsByBrand(data.items, "Nikon")

// var items2 = getItemsByAuthor(items1, "ebay");

// console.log(items2);

var sonyItems = getItemsByBrand(data.items, "Sony");

console.log(sonyItems);
var sonyAvailable = getAvailableProducts(sonyItems);

console.log(sonyAvailable);