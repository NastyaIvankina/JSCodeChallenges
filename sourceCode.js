"use strict";

class Movie {
    constructor(Title, Director, Genre, ReleaseYear, Rating) {
        this.movie = Title;
        this.director = Director;
        this.genre = Genre;
        this.releaseYear = ReleaseYear;
        this.rating = Rating
    }

    getOverview() {
        return `${this.movie}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;;
    }
};

const jackMovie = new Movie('The House That Jack built', 'Lars von Trier', 'triller', '2018', '7.0');

const puaro = new Movie('Poirot', 'Edvard Bennet', 'detective', 1989, 8.2);

console.log(jackMovie.getOverview());
console.log(puaro.getOverview());