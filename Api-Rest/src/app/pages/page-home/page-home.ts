import { Component, inject } from '@angular/core';
import { ComponentCard } from "../../components/component-card/component-card";
import { ServiceApi } from '../../services/service-api';
import { InterfaceUsuario } from '../../interfaces/interface-usuario.interface';

@Component({
  selector: 'app-page-home',
  imports: [ComponentCard],
  templateUrl: './page-home.html',
  styleUrl: './page-home.css',
})
export class PageHome {


  sapi = inject(ServiceApi);

  usuariosList: InterfaceUsuario[];



  constructor() {
    this.usuariosList = [];
  }




  async ngOnInit(): Promise<void> {


    try {

      this.usuariosList = await this.sapi.getAllUsers();

    }catch (err) {

      alert("Error al conectar a la API")

    }



  }


}
