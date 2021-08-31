"use strict"

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

class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this.edition = edition;
    };

    getEdition() {
        return `The current version of this book is ${this.edition}`;
    }
};

let warAndPiece = new TechnicalBook("War and Piece", "Tolstoy", 546393, 6, 1);
let soyer = new TechnicalBook("Tom Soyer", "Mark Twen", 6854, 78, 2);
let kastaneda = new TechnicalBook("Don Huan", "Kastaneda Karlos", 2744, 10, 3);
let harry = new TechnicalBook("Harry Potter", "Joan Rowling", 4567, 60, 4);

console.log(warAndPiece.availability); //low stock
console.log(warAndPiece.sell(10)); //we don't have
warAndPiece.restock(10);
console.log(warAndPiece.getAvailability()); //in stock
console.log(warAndPiece.getEdition());//1

console.log(soyer.getAvailability()); //in stock
console.log(soyer.sell(77));
console.log(soyer.sell());
console.log(soyer.getAvailability());//out of stock
console.log(soyer.getEdition());//2

console.log(kastaneda.getAvailability()); //in stock
console.log(kastaneda.sell(5));
console.log(kastaneda.getAvailability()); //low stock
console.log(kastaneda.getEdition());//3

console.log(harry.getAvailability()); //in stock
console.log(harry.sell(60)); 
console.log(harry.getAvailability()); //out of stock
harry.restock(5);
console.log(harry.getAvailability()); //low stock
console.log(harry.getEdition());//4





