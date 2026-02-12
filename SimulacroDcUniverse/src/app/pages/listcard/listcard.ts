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


  heroesArray: Iheroe[] = [];
  heroService = inject(HeroeService);



  async ngOnInit(): Promise<void> {

    this.heroesArray = await this.heroService.getAllHeroes();

    console.log(this.heroesArray);
  }






  heroeEliminado(heroeId: any) {
    this.heroService.deleteHeroById(heroeId).then(() => {
      this.heroesArray = this.heroesArray.filter(heroe => heroe.id !== heroeId);
    });
  }
}
