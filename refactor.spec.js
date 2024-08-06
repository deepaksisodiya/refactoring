// describe('hello', () => {
//   it('returns Hello world', () => {
//     expect("Hello world").toEqual('Hello world');
//   });
// });

// bookStore.test.js
import { addBook, isInStock, totalValue, books, prices } from './refactor';

beforeEach(() => {
    // Reset the global variables before each test
    books.length = 0;
    prices.length = 0;
});

describe('addBook', () => {
    it('should add "The Catcher in the Rye" correctly', () => {
        addBook("The Catcher in the Rye", "J.D. Salinger", 1951, 9.99);
        expect(books).toContain("Book1");
        expect(prices).toContain(9.99);
    });

    it('should add "To Kill a Mockingbird" correctly', () => {
        addBook("To Kill a Mockingbird", "Harper Lee", 1960, 7.99);
        expect(books).toContain("Book2");
        expect(prices).toContain(7.99);
    });

    it('should not add unknown books', () => {
        addBook("Unknown Book", "Unknown Author", 2000, 5.99);
        expect(books).not.toContain("Unknown Book");
        expect(prices).not.toContain(5.99);
    });
});

describe('isInStock', () => {
    it('should return true if the book is in stock', () => {
        addBook("1984", "George Orwell", 1949, 6.99);
        expect(isInStock("Book3")).toBe(true);
    });

    it('should return false if the book is not in stock', () => {
        expect(isInStock("Nonexistent Book")).toBe(false);
    });
});

describe('totalValue', () => {
    it('should calculate the total value correctly', () => {
        addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 10.99);
        addBook("1984", "George Orwell", 1949, 6.99);
        expect(totalValue()).toBe(17.98);
    });

    it('should return 0 if no books are added', () => {
        expect(totalValue()).toBe(0);
    });
});

  