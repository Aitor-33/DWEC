import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HeroeService } from '../../services/heroe-service';
import { Iheroe } from '../../interfaces/iheroe';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [ RouterLink ],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {


  heroService = inject(HeroeService);
  @Input() heroe!: Iheroe;
  @Output() heroDeleted = new EventEmitter<number>();


  router = inject(Router);


    async eliminarHeroe(heroe: Iheroe){

  if (heroe.id == null) return;

      const response = await Swal.fire({
        title: 'estas seguro?',
        text: `vas a borrar a ${heroe.heroname}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'si, borrar',
        cancelButtonText: 'cancelar'
      });

      if(response.isConfirmed){

        try{

          await this.heroService.deleteHeroById(heroe.id);
          Swal.fire({
            icon: 'success',
            title: 'heroe',
            text: `heroe ${heroe.heroname} eliminado.`,
          });

          this.heroDeleted.emit(heroe.id);

        } catch (error) {

          console.error('Error al borrar:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `error al borrar: ${heroe.heroname}. intentelo mas tarde.`,
          });

        }
      }
    }

}
