import Product from "./classes/Product";
import { products } from "./db.js";
console.log(products)

products.forEach(product => {
    console.log(product);
    const {image, name, price, description} = product;
    const productCardMarkUp =
    ``
});