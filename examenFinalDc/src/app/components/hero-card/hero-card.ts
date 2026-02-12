import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero-service';
import { IHero } from '../../interfaces/ihero';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-card',
  imports: [ RouterLink],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {


  heroServices = inject(HeroService);
  @Input() hero!: IHero;
  @Output() heroDeleted = new EventEmitter<number>();



    async deleteHero(hero: IHero) {
      try {
        await this.heroServices.deleteHeroById(hero.id);
        Swal.fire({
          icon: 'success',
          title: 'Eliminado',
          text: `El heroe ${hero.heroname} ha sido eliminado correctamente.`,
        });

        this.heroDeleted.emit(hero.id)
      } catch (error) {
        console.error('Error eliminando usuario:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Ha ocurrido un error al eliminar el heroe ${hero.heroname}. Por favor, inténtelo de nuevo más tarde.`,
        });
      }
    }
}
