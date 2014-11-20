// ##5.) Use your functions
// Use the functions you created in 1 - 5 to print find the following lists of items.
//  * All items made by Nikon with the author eBay.
//  * All items made by Sony.
//  * All items made by Sony that are available.

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
            //newArray.push([arr[i].product.brand, arr[i].product.availability]);
        }
    }
    return newArray;
}




//  * All items made by Nikon with the author eBay.

// var items1 = getItemsByBrand(data.items, "nikon")

// var items2 = getItemsByAuthor(getItemsByBrand(data.items, "nikon"), "ebay");

// console.log(items2);


//  * All items made by Sony.


var sonyItems = getItemsByBrand(data.items, "Sony");

console.log(sonyItems);


//  * All items made by Sony that are available.

var sonyAvailable = getAvailableProducts(sonyItems);

console.log(sonyAvailable);