/* eslint-disable quotes */
var books = {}; // Global variable
var prices = []; // Separate global array for prices

function addBook(title, author, year, price) {
    if (isInStock(title)) {
        return 'Book already exists';        
    }
    
    const book = {
        title,
        author,
        year,
        price
    }
    books[title] = book;
    prices.push(price);
    console.log(title);
}

function isInStock(title) {
    return books[title] !== undefined;
}

function totalValue() {
    var total = 0.0;
    for (var i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}

function removeBook(title) {
    if (isInStock(title)) {
        console.log('asjsa ', books);
        delete books[title];
        console.log('asjsa baad', books);
    }
}

module.exports = {
    addBook,
    isInStock,
    totalValue,
    removeBook,
    books,
    prices
}

// addBook("The Catcher in the Rye", "J.D. Salinger", 1951, 9.99);
// addBook("To Kill a Mockingbird", "Harper Lee", 1960, 7.99);

// console.log(isInStock("Book1")); // Should return true
// console.log(isInStock("Book5")); // Should return false

// console.log("Total value of inventory: $" + totalValue());