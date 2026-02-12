import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iheroe } from '../../interfaces/iheroe';
import { HeroeService } from '../../services/heroe-service';

@Component({
  selector: 'app-vermas',
  imports: [ RouterLink ],
  templateUrl: './vermas.html',
  styleUrl: './vermas.css',
})
export class Vermas {

  heroe!: Iheroe;
  Sheroe = inject(HeroeService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params : any) =>{
      let id: number = params.id;

      if(id != undefined) {
          let response = await this.Sheroe.getHeroeId(id);
          if (response != undefined) {
            this.heroe = response;
          }
      }
    })

  }


}
