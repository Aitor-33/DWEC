import { data } from "./carrito.js";

data.products.forEach((producto) => {
  console.log(`SKU: ${producto.SKU} | ${producto.title}`);
});




