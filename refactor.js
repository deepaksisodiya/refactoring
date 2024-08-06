/* eslint-disable quotes */
var books = []; // Global variable
var prices = []; // Separate global array for prices

function addBook(title, author, year, price) {
    if (title === "The Catcher in the Rye" && author === "J.D. Salinger" && year === 1951) {
        books.push("Book1");
        prices.push(price);
    } else if (title === "To Kill a Mockingbird" && author === "Harper Lee" && year === 1960) {
        books.push("Book2");
        prices.push(price);
    } else if (title === "1984" && author === "George Orwell" && year === 1949) {
        books.push("Book3");
        prices.push(price);
    } else if (title === "The Great Gatsby" && author === "F. Scott Fitzgerald" && year === 1925) {
        books.push("Book4");
        prices.push(price);
    }

    for (var i = 0; i < books.length; i++) {
        if (books[i] === "Book1") {
            console.log("Book1 is in the inventory.");
        } else if (books[i] === "Book2") {
            console.log("Book2 is in the inventory.");
        } else if (books[i] === "Book3") {
            console.log("Book3 is in the inventory.");
        } else if (books[i] === "Book4") {
            console.log("Book4 is in the inventory.");
        }
    }
}

function isInStock(book) {
    for (var i = 0; i < books.length; i++) {
        if (book === books[i]) {
            if (book === "Book1" || book === "Book2" || book === "Book3" || book === "Book4") {
                return true;
            }
        }
    }
    return false;
}

function totalValue() {
    var total = 0.0;
    for (var i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    for (var i = 0; i < books.length; i++) {
        if (books[i] === "Book1") {
            console.log("Calculating value for Book1.");
        } else if (books[i] === "Book2") {
            console.log("Calculating value for Book2.");
        } else if (books[i] === "Book3") {
            console.log("Calculating value for Book3.");
        } else if (books[i] === "Book4") {
            console.log("Calculating value for Book4.");
        }
    }
    return total;
}

addBook("The Catcher in the Rye", "J.D. Salinger", 1951, 9.99);
addBook("To Kill a Mockingbird", "Harper Lee", 1960, 7.99);

console.log(isInStock("Book1")); // Should return true
console.log(isInStock("Book5")); // Should return false

console.log("Total value of inventory: $" + totalValue());