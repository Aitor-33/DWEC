import { Component, inject } from '@angular/core';
import { IHero } from '../../interfaces/ihero';
import { HeroService } from '../../services/hero-service';
import { HeroCard } from "../../components/hero-card/hero-card";

@Component({
  selector: 'app-hero-list',
  imports: [HeroCard],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {


  arrayHeroes: IHero[];
  heroService = inject(HeroService);

  constructor() {
    this.arrayHeroes = [];
  }
    async ngOnInit(): Promise<void> {


    try {

      // this.arrayHeroes = await this.heroService.getAllHero();

    }catch (err) {

      alert("Error al conectar a la API")

    }

  }

}
