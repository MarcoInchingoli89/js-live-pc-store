import Product from "./classes/Product.js";
const mouse = new Product ("vertical mouse", "", 1, 69.99, "mouse verticale");
const screen = new Product ("screen 24p", "", 2, 150.99, "schermo 24 pollici");
const laptop = new Product ("laptop acert", "", 3, 1150.99, "laptop acer");
const playstation = new Product ("PS5", "", 4, 499.99, "playstation 5");

const products = [
    mouse,
    screen,
    laptop,
    playstation
];

export {products};