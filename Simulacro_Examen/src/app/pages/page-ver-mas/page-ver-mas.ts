import { Iproducto } from './../../interfaces/iproducto';
import { Component, inject } from '@angular/core';
import { SCarrito } from '../../services/scarrito';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-ver-mas',
  imports: [],
  templateUrl: './page-ver-mas.html',
  styleUrl: './page-ver-mas.css',
})
export class PageVerMas {


    Miproducto !: Iproducto;
    sCarrito = inject(SCarrito);
    activatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: any) => {
            // recoger el parametro
            let id: number = Number(params.id);


            if (id != undefined) {

                // Pedir al servicio el servicioProfesional
                let response = this.sCarrito.getById(id);

                if (response != undefined) {

                    // Rellenar mi propiedad miServicio
                    this.Miproducto = response;
                }
            }
        });
    }


}
