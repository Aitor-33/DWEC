import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuenta-atras-component',
  imports: [],
  templateUrl: './cuenta-atras-component.html',
  styleUrl: './cuenta-atras-component.css',
})
export class CuentaAtrasComponent {

  @Input() numeroInicial: number = 100;
  private isRunning: boolean = false;
  intervalo: any;



  comnenzar() : void{

    if(!this.isRunning){
      this.intervalo = setInterval(() =>{

        if(this.numeroInicial > 0){

          this.numeroInicial --;

        }else{
          clearInterval(this.intervalo);
        }
      }, 1000)
      this.isRunning = true
    }

  }
}
