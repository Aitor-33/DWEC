import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SProductos } from '../../services/s-productos';
import { FormsModule, NgForm } from '@angular/forms';
import { IProducto } from '../../interfaces/i-producto';

@Component({
  selector: 'app-componente-filtro',
  imports: [FormsModule],
  templateUrl: './componente-filtro.html',
  styleUrl: './componente-filtro.css',
})
export class ComponenteFiltro {

  categorias: string[];

  activos: string[];

  SProductos = inject(SProductos);

  @Output() categoriaSeleccionada: EventEmitter<string> = new EventEmitter();

  @Output() nombreSeleccionado: EventEmitter<string> = new EventEmitter();

  @Output() activoSeleccionado: EventEmitter<boolean> = new EventEmitter();

  constructor() {

    this.categorias = [];
    this.activos = ["activo", "inactivo"];

  }

  ngOnInit() {

    this.categorias = this.SProductos.getAllCategory();


  }


  getDataFilter(form: any) {
    this.categoriaSeleccionada.emit(form.value.categoria);
  }

  getDataFilterActivo(form: any) {
    this.activoSeleccionado.emit(form.value.activo);
  }
}
