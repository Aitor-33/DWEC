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

    //output de categoria seleccionada
    @Output() categoriaSeleccionada: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.categorias = [];
    }

    //cogemos todas las categorias que hay
    ngOnInit() {
        this.categorias = this.Sapi.getAllCategory();
    }

    //para recoger los datos del filtro y hacer el output
    getDataFilter(form: any) {
        this.categoriaSeleccionada.emit(form.value.curso);
    }


}
