import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';

@Injectable({
  providedIn: 'root',
})
export class SProductos {

  roles: string[];

  CurrentRol: string;

  actives: boolean[];

  currentActive: boolean;

  arrayProductos: IProducto[];

  arrayProductosActivos: IProducto[];

  arrayProductosInActivos: IProducto[];

  categories: string[];

  constructor() {

    this.roles = ["user", "admin"];
    this.CurrentRol = "user";
    this.currentActive = true;
    this.actives = [true, false]

    this.categories = [];
    this.arrayProductos = [];
    this.arrayProductosActivos = [];
    this.arrayProductosInActivos = [];

    this.categories.push("hombre");
    this.categories.push("mujer");
    this.categories.push("niño");
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => {
        data.forEach((producto: IProducto) => {

          if (producto.active === true) {

            this.arrayProductos.push(producto);
            this.arrayProductosActivos.push(producto);

          } else {

            this.arrayProductos.push(producto);
            this.arrayProductosInActivos.push(producto);

          }


          console.log(this.arrayProductos);


        });


      });
  }

  obtenerProductos(): IProducto[] {

    return this.arrayProductos;

  }

  //aqui esta el metodo para borrar por el nombre si quisiera eliminarlo por id solo seria cambiarlo es sencillo
  deleteById(id: string): void {
    // this.arrSeries = this.arrSeries.filter(serie => serie.title !== title);
    // console.log(this.arrSeries);
    let i = this.arrayProductos.findIndex(producto => producto.id == id);
    if (i != -1 && i >= 0 && i < this.arrayProductos.length) {
      this.arrayProductos.splice(i, 1);
    }
  }


  insertarProducto(producto: IProducto): void {

    if (!this.arrayProductos.includes(producto) && producto != null) {

      this.arrayProductos.push(producto);

    }
  }

  getAllCategory(): string[] {

    return this.categories;

  }

  getAllPActivos(): IProducto[] {

    return this.arrayProductosActivos;

  }

  getAllPInActivos(): IProducto[] {

    return this.arrayProductosInActivos;

  }


  getById(id: string): IProducto | undefined {

    let producto: IProducto;

    let response = this.arrayProductos.find(producto => producto.id == id)

    if (response != undefined) {

      producto = response;

    } else {
      producto = {
        id: "error",
        name: "Servicio no encontrado",
        description: "Contacte con el adminsitrador",
        price: 0,
        category: "",
        image: "",
        active: false
      }
    }

    return producto;
  }


  getProductosByCategoria(category: string): IProducto[] {

    return this.arrayProductos.filter(producto => producto.category.includes(category));

  }

  updateProducto(producto: IProducto): void {
    let i = this.arrayProductos.findIndex(p => p.id == producto.id);
    producto.id = this.arrayProductos[i].id;
    console.log(producto);

    if (i != -1 && i >= 0 && i < this.arrayProductos.length) {
      this.arrayProductos.splice(i, 1);
    }

    this.arrayProductos.push(producto);

  }



  //para cambiar el rol
  setRole(rol: string) {
    this.CurrentRol = rol;
  }
  //para recoger el rol
  getRole(): string {
    return this.CurrentRol;
  }
  //para recoger todos los roles
  getAllRoles(): string[] {
    return this.roles;
  }

  getProductosByActivo(activo: boolean): IProducto[] {

    return this.arrayProductos.filter(producto => producto.active === activo);

  }

  getAllactivos(): boolean[] {
    return this.actives;
  }

  getActivo(): boolean {
    return this.currentActive;
  }


  getProductosByName(name: string): IProducto[] {

    return this.arrayProductos.filter(producto => producto.name.includes(name));

  }
}
