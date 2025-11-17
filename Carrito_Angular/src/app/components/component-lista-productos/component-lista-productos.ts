import { Component } from '@angular/core';
import { InterfaceProducto } from '../../interfaces/interface-producto.interface';
import { ServiceProductos } from '../../services/service-productos';

@Component({
  selector: 'app-component-lista-productos',
  imports: [],
  templateUrl: './component-lista-productos.html',
  styleUrl: './component-lista-productos.css',
})
export class ComponentListaProductos {


  arrayDeProductos: InterfaceProducto[];


  constructor(private serviceProductos : ServiceProductos){

    this.arrayDeProductos = this.serviceProductos.obtenerProductos();

  }



  // esta funcion lo que hace es ir comprobando cada 100 milisegundos si el array ya esta completo para que se pueda rellenar 
  //cuando porfin esta lleno lo que hace es cargar esos datos en arrayDeProductos y cerrar el intervalo para que deje de comprobar
  //esta funcion la e encontrado en internet pero no la entiendo muy bien asique la tendre que cambiar mas adelante
  //aunque de momento para seguir con el proyecto funciona.
ngOnInit() {
  const check = setInterval(() => {
    const productos = this.serviceProductos.obtenerProductos();

    if (productos.length > 0) {
      this.arrayDeProductos = productos;
      console.log("Productos cargados:", this.arrayDeProductos);
      clearInterval(check);
    }
  }, 100);
}


  comprobar() {
  console.log(this.arrayDeProductos);
}
}
