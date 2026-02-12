import { Component, inject, OnInit } from '@angular/core';
import { Iheroe } from '../../interface/iheroe';
import { SHeroes } from '../../service/s-heroes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DcCardComponents } from '../../component/dc-card.components/dc-card.components';

@Component({
  selector: 'app-list-hero',
  imports: [CommonModule, DcCardComponents, FormsModule],
  templateUrl: './list-hero.html',
  styleUrl: './list-hero.css',
})
export class ListHero implements OnInit {

  HeroArr: Iheroe[] = [];
  heroesFiltrados: Iheroe[] = [];
  heroeService = inject(SHeroes);

  totalPages: number = 1;
  totalElements: number = 0;
  first: boolean = false;
  last: boolean = false;

  // Variables de filtros
  filterName: string = '';
  filterGender: string = '';
  filterAlignment: string = '';
  filterStrength: number = 0;

  async cargarHeroes(pagina: number): Promise<void> {
    this.first = true;
    this.last = true;
    try {
      const response = await this.heroeService.getAll(pagina);

      this.HeroArr = response.content;
      this.totalPages = response.totalPages;
      this.totalElements = response.totalElements;
      
      // Aplicar filtros después de cargar
      this.aplicarFiltros();
    } catch (error) {
      alert("Error al obtener los héroes");
    }
  }

  aplicarFiltros(): void {
    this.heroesFiltrados = this.HeroArr.filter(heroe => {
      // Filtro por nombre (búsqueda parcial, insensible a mayúsculas)
      const coincideNombre = this.filterName === '' || 
        heroe.heroname.toLowerCase().includes(this.filterName.toLowerCase()) ||
        heroe.fullname.toLowerCase().includes(this.filterName.toLowerCase());

      // Filtro por género
      const coincideGenero = this.filterGender === '' || 
        heroe.gender === this.filterGender;

      // Filtro por alineación
      const coincideAlineacion = this.filterAlignment === '' || 
        heroe.alignment === this.filterAlignment;

      // Filtro por fuerza mínima
      const coincideFuerza = heroe.powerstats.strength >= this.filterStrength;

      // Retornar true solo si cumple TODOS los filtros
      return coincideNombre && coincideGenero && coincideAlineacion && coincideFuerza;
    });
  }

  limpiarFiltros(): void {
    this.filterName = '';
    this.filterGender = '';
    this.filterAlignment = '';
    this.filterStrength = 0;
    this.aplicarFiltros();
  }

  async ngOnInit(): Promise<void> {
    await this.cargarHeroes(1);
  }
}