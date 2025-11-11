import { Component } from '@angular/core';
import { InterfaceNoticia } from '../../interfaces/interface-noticia';
import { DatePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component-noticias',
  imports: [DatePipe],
  templateUrl: './component-noticias.html',
  styleUrl: './component-noticias.css',
})
export class ComponentNoticias {

    arrayNoticias: InterfaceNoticia[]  = [];

    constructor(){
      this.arrayNoticias = [{
      titulo: "Max Verstappen un paso mas cerca de ganar el mundial",
      imagen: "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiJmMW1hbmFnZXIvMjAyNC9kcml2ZXJzL2hlYWRzaG90cy9mMS92ZXIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDB9fX0=",
      cuerpoNoticia: "Max se acerca peligrosamente a los chicos de mclaren (Norris y Piastri) en la lucha por el mundial mas apretado desde 2021",
      fechaNoticia: new Date(2025, 9, 8)
    },
    {
      titulo: "Marc Marquez no volvera a correr en MotoGP esta temporada",
      imagen: "https://cdn-8.motorsport.com/images/mgl/0ZR74Db0/s800/marc-marquez-ducati-team.jpg",
      cuerpoNoticia: "Marc el actual campeon de esta temporada de MotoGP no volvera a correr esta temporada debido a una lesion en su hombro derecho que le ha obligado a pasar por el quirofano",
      fechaNoticia: new Date(2025, 9, 9)
    }];
  }

  //aqui se agrega la noticia al array de noticias para que lo pinte despues el for del html
  agregarNoticia(noticia: InterfaceNoticia) {
    this.arrayNoticias.push(noticia);
  }

}
