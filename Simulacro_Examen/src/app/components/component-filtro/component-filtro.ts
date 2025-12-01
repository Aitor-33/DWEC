import { Sapi } from './../../services/sapi';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-component-filtro',
  imports: [FormsModule],
  templateUrl: './component-filtro.html',
  styleUrl: './component-filtro.css',
})
export class ComponentFiltro {

    categorias: string[];
    filterForm: any;
    Sapi = inject(Sapi);

    @Output() categoriaSeleccionada: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.categorias = [];
    }

    ngOnInit() {
        this.categorias = this.Sapi.getAllCategory();
    }

    getDataFilter(form: any) {
        this.categoriaSeleccionada.emit(form.value.curso);
    }


}
