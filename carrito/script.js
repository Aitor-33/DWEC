import { data } from "./carrito.js";
import CProductos from "./CProductos.js";
import carrito from "./CProductos.js"


const productos = [];

data.products.forEach((p) => {
  const producto = new CProductos(p.SKU, p.title, p.price);
  productos.push(producto);
});


//manejo del dom





document.addEventListener("DOMContentLoaded", () => {

  fetch('http://localhost:8080/api/carrito')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el JSON');
      }
      return response.json();
    })
    .then(data => {


      const totalesProductos = [];

      console.log(productos);

      data.products.forEach((producto) => {


        const tablaProductos = document.querySelector('#tablaProductos');

        const tablaCarrito = document.querySelector('#tablaCarrito');


        //para hacer las filas
        const tr1Producto = document.createElement('tr');


        //esto es donde creo el texto para meter el nombre de los productos
        const td1Producto = document.createElement('td');


        //aqui es donde metere los botones de mas y menos y la cantidad del producto
        const td2Producto = document.createElement('td');

        const btnResta = document.createElement('button');
        const btnSuma = document.createElement('button');
        const inputCantidad = document.createElement('input');
        inputCantidad.value = 0;
        inputCantidad.readOnly = true;


        //aqui meto unidad que es el precio de una unidad de ese producto
        const td3Producto = document.createElement('td');


        //aqui es donde ira el total
        const td4Producto = document.createElement('td');

        const precioTotalProducto = document.createElement('p');


        //aqui le doy el valor a cada cosa que he ido metiendo en el html
        td1Producto.textContent = producto.title;

        td3Producto.textContent = producto.price + data.currency;

        precioTotalProducto.textContent = producto.price;


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

        td4Producto.append(precioTotalProducto);




        //tabla del carrito

        const filaCarrito = document.createElement('tr');
        const N1ProductoCarrito = document.createElement("td");
        const N2ProductoCarrito = document.createElement("td");
        const N3ProductoCarrito = document.createElement("td");


        tablaCarrito.appendChild(filaCarrito);

        filaCarrito.appendChild(N1ProductoCarrito);
        filaCarrito.appendChild(N2ProductoCarrito);
        filaCarrito.appendChild(N3ProductoCarrito);





        //esta es la funcion para que se actualice el precio segun la cantidad
        function actualizarPrecioTotal() {

          const cantidad = Number(inputCantidad.value);
          const total1 = cantidad * producto.price;

          //esto redondea a 2 decimales
          precioTotalProducto.textContent = total1.toFixed(2) + data.currency;


        }
        //accedemos aqui a la funcion para que el precio total empiece desde cero nada mas abrir la pagina
        //porque del contrario apareceria como si nada mas entrar hubiera un producto ya añadido en el precio total
        actualizarPrecioTotal();

        let valorActual = 0;

        btnSuma.addEventListener("click", function () {

          // Aumentamos en 1
          valorActual++;

          // Actualizamos el input
          inputCantidad.value = valorActual;

          //aqui utilizamos la funcion de actualizar el precio por cantaidad
          actualizarPrecioTotal();
          actualizarTablaTotal();
          calcularTotalTotal();
        });



        btnResta.addEventListener("click", function () {

          if (valorActual > 0) {

            // disminuimos en 1
            valorActual--;
            

          }

          // Actualizamos el input
          inputCantidad.value = valorActual;

          //aqui utilizamos la funcion de actualizar el precio por cantaidad
          actualizarPrecioTotal();
          actualizarTablaTotal();
          calcularTotalTotal();

        });


        const total = producto.price + data.currency;


        const actualizarTablaTotal = () => {
          const valorTotal = producto.title + " " + total + " x" + valorActual;
          N1ProductoCarrito.textContent = valorTotal;

          if(valorActual === 0){
            valorTotal = "";

          }
        }



          const divTotalTotal = document.getElementById("totalCarrito");


        function calcularTotalTotal() {
  let totalGeneral = 0;


  const filas = document.querySelectorAll("#tablaProductos tr");

  filas.forEach(fila => {
    const totalCelda = fila.querySelector("td:last-child p");
    if (totalCelda) {

      const texto = totalCelda.textContent.replace(data.currency, "");
      const valor = parseFloat(texto);
      if (!isNaN(valor)) totalGeneral += valor;
    }
  });


  const divTotalTotal = document.getElementById("totalCarrito");
  divTotalTotal.textContent = totalGeneral.toFixed(2) + data.currency;
}


      });

    })
    .catch(error => console.error(error));
});








