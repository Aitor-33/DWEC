import { Component, inject, Input } from '@angular/core';
import { InterfaceUsuario } from '../../interfaces/interface-usuario.interface';
import { ServiceApi } from '../../services/service-api';

@Component({
  selector: 'app-component-card',
  imports: [],
  templateUrl: './component-card.html',
  styleUrl: './component-card.css',
})
export class ComponentCard {


  sapi = inject(ServiceApi);


  @Input() usuario!: InterfaceUsuario;


}
