import { data } from "./carrito.js";
import CProductos from "./CProductos.js";
import carrito from "./CProductos.js"




//foreach para recoger los datos del jso 


  const productos = [];

  data.products.forEach((p) => {

  const producto = new CProductos(p.SKU, p.title, p.price);


  productos.push(producto);
});



//manejo del dom

document.addEventListener('DOMContentLoaded', function (){

  data.products.forEach((p) =>{

  const producto = new CProductos(p.SKU, p.title, p.price);
  const tablaProductos = document.querySelector('.tablaProductos');




  const tr1Producto = document.createElement('tr');

  const td1Producto = document.createElement('td');

  td1Producto.textContent = producto.title;

  tr1Producto.appendChild(td1Producto);

  tablaProductos.appendChild(tr1Producto);


  });







});






