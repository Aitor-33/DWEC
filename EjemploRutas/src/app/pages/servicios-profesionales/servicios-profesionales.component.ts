import { Component } from '@angular/core';
import { ServiciosProfesionalesCardComponent } from "../../components/servicios-profesionales-card/servicios-profesionales-card.component";

@Component({
  selector: 'app-servicios-profesionales',
  imports: [ServiciosProfesionalesCardComponent],
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
