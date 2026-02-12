import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Card } from "../../components/card/card";
import { Iheroe } from '../../interfaces/iheroe';
import { HeroeService } from '../../services/heroe-service';

@Component({
  selector: 'app-listcard',
  imports: [Navbar, Card],
  templateUrl: './listcard.html',
  styleUrl: './listcard.css',
})
export class Listcard {


  heroesArray: Iheroe[] ;
  heroService = inject(HeroeService);

  totalPages: number = 1;
  totalElements: number = 0;
  first: boolean = false;
  last: boolean = false;

constructor(){

  this.heroesArray = [];

}

  async cargarHeroes(pagina: number): Promise<void>{
    this.first = true;
    this.last = true;
    try {
      const response = await this.heroService.getAllHeroes(pagina);

      this.heroesArray = response.content;
      this.totalPages = response.totalPages;
      this.totalElements = response.totalElements;
    }catch (error){
      alert("error al obtener los usuarios");

    }
  }

  async ngOnInit(): Promise<void> {

    await this.cargarHeroes(1);

    console.log(this.heroesArray);
  }



  heroeEliminado(heroeId: any) {

    this.heroService.deleteHeroById(heroeId)

      this.heroesArray = this.heroesArray.filter(heroe => heroe.id !== heroeId);

  }
}
