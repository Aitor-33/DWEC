import { data } from "./data.js";
import CProductos from "./CProductos.js";

// Creamos un array vacío
const productos = [];

// Recorremos el array con forEach
data.products.forEach((p) => {
  // Creamos una nueva instancia de CProductos
  const producto = new CProductos(p.SKU, p.title, p.price);

  // La guardamos en el array
  productos.push(producto);
});

console.log(productos);

// Ejemplo: usar método de la clase
productos.forEach((p) => console.log(p.getInfo()));


document.addEventListener('DOMContentLoaded', function (){






})






