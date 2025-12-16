import { Component, inject } from '@angular/core';
import { InterfaceUsuario } from '../../interfaces/interface-usuario.interface';
import { ServiceApi } from '../../services/service-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-ver-mas',
  imports: [],
  templateUrl: './component-ver-mas.html',
  styleUrl: './component-ver-mas.css',
})
export class ComponentVerMas {


    usuario !: InterfaceUsuario;
    sapi = inject(ServiceApi);
    activatedRoute = inject(ActivatedRoute);


    ngOnInit(): void {
      //mediante el activated route metemos el id del producto al que queremos acceder y se metera en la ruta
        this.activatedRoute.params.subscribe((params: any) => {
            // recoger el parametro
            let _id: string = params._id;


            if (_id != undefined) {

                // Pedir al servicio el usuario mediante su _id
                let response = this.sapi.getUsersBy_Id(_id);

                if (response != undefined) {

                    // Rellenar mi propiedad miProducto
                    this.usuario = response;
                }
            }
        });
    }



}
