"use strict";

class Book {
    constructor(title, author, isbn, numCopies) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
        this._numCopies = numCopies;
    };

    getAvailability() {
        let _isAvailable = (this._numCopies === 0) ? "out of stock" : (this._numCopies < 10) ? "lowstock" : "in stock";

        return this._title + " " + _isAvailable;
    };

    get availability() {
        return this.getAvailability();
    }

    getTitle() {
        return this._title;
    }

    sell(numSold = 1) {
        if (this._numCopies === 0) {
            this.getAvailability();
        } else if (this._numCopies < numSold) {
            return "We don't have so much copies to sell"
        } else {
            this._numCopies -= numSold;
            return "succesfully sold";
        }
    };

    restock(numCopies = 5) {
        this._numCopies += numCopies;
    }
};

let warAndPiece = new Book("War and Piece", "Tolstoy", 546393, 6);
let soyer = new Book("Tom Soyer", "Mark Twen", 6854, 78);
let kastaneda = new Book("Don Huan", "Kastaneda Karlos", 2744, 10);
let harry = new Book("Harry Potter", "Joan Rowling", 4567, 60);

console.log(warAndPiece.availability); //low stock
console.log(warAndPiece.sell(10)); //we don't have
warAndPiece.restock(10);
console.log(warAndPiece.getAvailability()); //in stock

console.log(soyer.getAvailability()); //in stock
console.log(soyer.sell(77));
console.log(soyer.sell());
console.log(soyer.getAvailability());//out of stock

console.log(kastaneda.getAvailability()); //in stock
console.log(kastaneda.sell(5));
console.log(kastaneda.getAvailability()); //low stock

console.log(harry.getAvailability()); //in stock
console.log(harry.sell(60)); 
console.log(harry.getAvailability()); //out of stock
harry.restock(5);
console.log(harry.getAvailability()); //low stock





