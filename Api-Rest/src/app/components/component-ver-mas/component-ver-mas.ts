import { Component, inject } from '@angular/core';
import { InterfaceUsuario } from '../../interfaces/interface-usuario.interface';
import { ServiceApi } from '../../services/service-api';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-component-ver-mas',
  imports: [RouterLink],
  templateUrl: './component-ver-mas.html',
  styleUrl: './component-ver-mas.css',
})
export class ComponentVerMas {


    usuario !: InterfaceUsuario;
    sapi = inject(ServiceApi);
    activatedRoute = inject(ActivatedRoute);


  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params : any) =>{
      let _id: string = params._id;

      if(_id != undefined) {
          let response = await this.sapi.getUsersBy_Id(_id);
          if (response != undefined) {
            this.usuario = response;
          }
      }
    })

  }



}
