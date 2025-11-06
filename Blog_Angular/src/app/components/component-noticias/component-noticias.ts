import { Component } from '@angular/core';
import { InterfaceNoticia } from '../../interfaces/interface-noticia';

@Component({
  selector: 'app-component-noticias',
  imports: [],
  templateUrl: './component-noticias.html',
  styleUrl: './component-noticias.css',
})
export class ComponentNoticias {

    arrayNoticias: InterfaceNoticia[]  = [];

    constructor(){
      this.arrayNoticias = [{
      titulo: "Max Verstappen un paso mas cerca de ganar el mundial",
      imagen: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiJmMW1hbmFnZXIvMjAyNC9kcml2ZXJzL2hlYWRzaG90cy9mMS92ZXIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDB9fX0=",
      cuerpoNoticia: "Max se acerca peligrosamente a los chicos de mclaren (Norris y Piastri) en la lucha por el mundial mas apretado desde 2021"
    },
    {
      titulo: "hola",
      imagen: "",
      cuerpoNoticia: "pepe"
    }];
  }

}
