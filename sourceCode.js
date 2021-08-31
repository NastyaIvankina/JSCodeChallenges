"use strict";

const dishes = [
    {
        name: "EggPlant Parmesan",
        vegetarian: true
    },
    {
        name: "Spagetti Bolongese",
        vegetarian: false
    },
    {
        name: "Salad Iceberg",
        vegetarian: true
    },
    {
        name: "Grass Oil",
        vegetarian: true
    },
    {
        name: "Beafsteak",
        vegetarian: false
    },

];

let vegetarianDishes = dishes.filter(item => item.vegetarian);
console.log(vegetarianDishes);

function vegetarianMenu(vegetarianDishes) {
    const menuNode = document.querySelector("#menu");
    vegetarianDishes.forEach(element => {
        let dish = document.createElement('li');
        dish.textContent = element.name;
        menuNode.appendChild(dish);
    });
};

vegetarianMenu(vegetarianDishes);