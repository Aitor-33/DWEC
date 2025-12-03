import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../../interfaces/i-producto';
import { SProductos } from '../../services/s-productos';

@Component({
  selector: 'app-page-ver-mas',
  imports: [],
  templateUrl: './page-ver-mas.html',
  styleUrl: './page-ver-mas.css',
})
export class PageVerMas {


      Miproducto !: IProducto;

      SProductos = inject(SProductos);

    activatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
      //mediante el activated route metemos el id del producto al que queremos acceder y se metera en la ruta
        this.activatedRoute.params.subscribe((params: any) => {
            // recoger el parametro
            let id: string = params.id;


            if (id != undefined) {

                // Pedir al servicio el producto mediante su id
                let response = this.SProductos.getById(id);

                if (response != undefined) {

                    // Rellenar mi propiedad miProducto
                    this.Miproducto = response;
                }
            }
        });
    }





}
