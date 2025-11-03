import { Component } from '@angular/core';
import { ImageInterface } from '../../interfaces/image-interface';

@Component({
  selector: 'app-galeria-component',
  imports: [],
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.css',
})
export class GaleriaComponent {

  arrayImagenes:ImageInterface[];
  imagenActual: number;

  constructor(){
    this.imagenActual = 0;
    this.arrayImagenes = [{

url: 'https://placehold.co/600x400/orange/white',
      title: 'Naranja',
      alt: 'soy un cuadrado Naranja'
 
},

{

url: 'https://placehold.co/600x400/blue/white',
      title: 'Azul',
      alt: 'soy un cuadrado Azul'
 
},

{

url: 'https://placehold.co/600x400/green/white',
      title: 'Verde',
      alt: 'soy un cuadrado Verde'
 
},

{

url: 'https://placehold.co/600x400/red/white',
      title: 'Rojo',
      alt: 'soy un cuadrado Rojo'
 
}
  ]
  }

anterior(): void{

this.imagenActual --;

  if (this.imagenActual < 0){

    this.imagenActual = this.arrayImagenes.length -1;

  }
}

siguiente(): void{

this.imagenActual ++;

  if(this.imagenActual >= this.arrayImagenes.length){

    this.imagenActual = 0;

  }
}


}
