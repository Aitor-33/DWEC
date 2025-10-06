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

  data.products.forEach((producto) =>{


  const tablaProductos = document.querySelector('#tablaProductos');



    //para hacer las filas
  const tr1Producto = document.createElement('tr');


  //esto es donde creo el texto para meter el nombre de los productos
  const td1Producto = document.createElement('td');


  //aqui es donde metere los botones de mas y menos y la cantidad del producto
  const td2Producto = document.createElement('td');

      const btnResta = document.createElement('button');
      const btnSuma = document.createElement('button');
      const inputCantidad = document.createElement('input');


  //aqui meto unidad que es el precio de una unidad de ese producto
  const td3Producto = document.createElement('td');

  //aqui es donde ira el total
  const td4Producto = document.createElement('td');

  const currency = document.createElement('p');

  //aqui le doy el valor a cada cosa que he ido metiendo en el html
  td1Producto.textContent = producto.title;

  td3Producto.textContent = producto.price;

  currency.textContent = data.currency;

  //poniendo el contenido de los botones
  btnResta.textContent = '-';

  btnSuma.textContent = '+';

  btnResta.classList.add('btn');

  btnSuma.classList.add('btn');

  

  //clase de input
  inputCantidad.classList.add('inpt');

  //aqui voy insertando lo anterior al html
  tablaProductos.appendChild(tr1Producto);

  tr1Producto.appendChild(td1Producto);

  tr1Producto.appendChild(td2Producto);

  td2Producto.append(btnResta, inputCantidad, btnSuma);

  tr1Producto.appendChild(td3Producto);

  tr1Producto.appendChild(td4Producto);
  
  td4Producto.appendChild(currency);




    const totalPrecioProd1 = producto.price;

btnSuma.addEventListener("click", function () {

    let valorActual = Number(inputCantidad.value);
    
    // Aumentamos en 1
    valorActual++;
    
    // Actualizamos el input
    inputCantidad.value = valorActual;

});



btnResta.addEventListener("click", function () {

  // Convertimos el valor del input a número
    let valorActual = Number(inputCantidad.value);
    
    // Aumentamos en 1
    valorActual--;
    
    // Actualizamos el input
    inputCantidad.value = valorActual;

});

  });







});






