import { Injectable } from '@angular/core';
import { Iproducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class Sapi {

  arrayProductos: Iproducto[];

  private categories: string[] = [];

  roles: string[];
  CurrentRol: string;

  //aqui metemos todo lo necesario y el fetch
  constructor() {
    this.roles = ["user", "admin"];
    this.CurrentRol = "user";
    this.arrayProductos = [];
    this.categories.push("hombre");
    this.categories.push("mujer");
    this.categories.push("niño");
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => {
        data.forEach((producto: Iproducto) => {
          this.arrayProductos.push(producto);
        });


      });

  }
//aqui el metodo para que te de todos los productos
  obtenerProductos(): Iproducto[] {

    return this.arrayProductos;

  }
//metodo para que te de todas las categorias
  getAllCategory(): string[] {
    return this.categories;
  }

  //para borrar un producto por su id introducido
  removeStudentbyId(studentRemove: Iproducto): void {
    this.arrayProductos = this.arrayProductos.filter(producto => producto.id !== studentRemove.id);
  }

  //para recoger los productos por la categoria introducida
      getStudentByCategoria(category: string): Iproducto[] {
        return this.arrayProductos.filter(producto => producto.category.includes(category));
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
}
