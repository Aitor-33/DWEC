import { Injectable } from '@angular/core';
import { Iproducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class Sapi {

  arrayProductos: Iproducto[];

  private categories: string[] = [];

  roles: string[];
  rol: string;

  constructor() {
    this.roles = ["user", "admin"];
    this.rol = this.roles[0];
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

  obtenerProductos(): Iproducto[] {

    return this.arrayProductos;
    console.log(this.arrayProductos);


  }

  getAllCategory(): string[] {
    return this.categories;
  }

  removeStudentbyId(studentRemove: Iproducto): void {
    this.arrayProductos = this.arrayProductos.filter(producto => producto.id !== studentRemove.id);
  }

      getStudentByCategoria(category: string): Iproducto[] {
        return this.arrayProductos.filter(producto => producto.category.includes(category));
    }

    getRoles(): string[]{

      return this.roles;
    }


}
