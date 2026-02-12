import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Iheroe } from '../../interface/iheroe';
import { SHeroes } from '../../service/s-heroes';

@Component({
  selector: 'app-hero-vist',
  imports: [RouterModule],
  templateUrl: './hero-vist.html',
  styleUrl: './hero-vist.css',
})
export class HeroVist {

  @Output() heroeEliniminado = new EventEmitter<string>()

  heroe !: Iheroe;
  HeroeService = inject(SHeroes);
  activatedRoute = inject(ActivatedRoute);

  constructor(){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any)=> {
      let id: number = params.id;

      if(id != undefined){
        let response = await this. HeroeService.getById(id);
        if(response != undefined){
          this.heroe = response;
        }
      }
    })
  }

  async eliminarHeroe(heroe: Iheroe){
    if(confirm(`Estas seguro de eliminar a ${heroe.heroname}?`)){
      try{
        await this.HeroeService.eliminarHeroe(heroe.id);
        alert('Heroe eliminado correctamente');
      }catch (error){
        alert(`Error al eliminar el Heroe`);
        console.error(error)
      }
    }
  }


}
