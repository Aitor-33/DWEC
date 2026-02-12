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


  private heroService = inject(HeroeService);
  @Input() heroe!: Iheroe;
  @Output() heroDeleted = new EventEmitter<number>();


  router = inject(Router);

async eliminarHeroe(heroe: Iheroe) {

  if (!heroe.id) return;

  const response = await this.heroService.deleteHeroById(heroe.id);

  this.heroDeleted.emit(heroe.id)

if (response.id) {

      Swal.fire({
        title: 'Eliminado',
        text: 'El heroe: ' + this.heroe.heroname + ' ha sido eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'aceptar',
        timer: 6000
      })

    } else {

      Swal.fire({
        title: 'error',
        text: 'El heroe: ' + this.heroe.heroname + ' no se ha podido eliminar',
        icon: 'error',
        confirmButtonText: 'aceptar',
        timer: 6000
      })

    }

}


      seeDetails(heroe: Iheroe) {
        this.router.navigate(['/formulario', heroe.id]);
        console.log(heroe);

    }

}
