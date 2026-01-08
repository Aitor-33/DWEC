import { Component, inject, Input } from '@angular/core';
import { InterfaceUsuario } from '../../interfaces/interface-usuario.interface';
import { ServiceApi } from '../../services/service-api';
import { Router, RouterLink } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-component-card',
  imports: [RouterLink],
  templateUrl: './component-card.html',
  styleUrl: './component-card.css',
})
export class ComponentCard {


  sapi = inject(ServiceApi);

  router = inject(Router);

  @Input() usuario!: InterfaceUsuario;


  async deleteSerie(usuario: InterfaceUsuario) {

    const response = await this.sapi.deleteById(usuario._id);

    if (response._id) {

      Swal.fire({
        title: 'Eliminado',
        text: 'El usuario: ' + usuario.username + ' ha sido eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'aceptar',
        timer: 6000
      })

    } else {

      Swal.fire({
        title: 'error',
        text: 'El usuario: ' + usuario.username + ' no se ha podido eliminar',
        icon: 'error',
        confirmButtonText: 'aceptar',
        timer: 6000
      })

    }
  }


      seeDetails(usuario: InterfaceUsuario) {
        this.router.navigate(['/formulario', usuario._id]);
        console.log(usuario);

    }


}
