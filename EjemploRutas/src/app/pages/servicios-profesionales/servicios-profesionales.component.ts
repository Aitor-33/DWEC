import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-profesionales',
  imports: [],
  templateUrl: './servicios-profesionales.component.html',
  styleUrl: './servicios-profesionales.component.css',
})
export class ServiciosProfesionalesComponent {
arrServiciosPro: IServiciosProfesionales[];
miServicio = inject(ServiciosProfesionalesService)

constructor(){
  this.arrServiciosPro = [];
}


ngOnInit():void{
  this.arrServiciosPro
}

}
