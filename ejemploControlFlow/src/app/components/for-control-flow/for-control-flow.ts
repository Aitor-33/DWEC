import { Component } from '@angular/core';

@Component({
  selector: 'app-for-control-flow',
  imports: [],
  templateUrl: './for-control-flow.html',
  styleUrl: './for-control-flow.css',
})
export class ForControlFlow {


  estudiantes: any[];
  nElementos: number;

  constructor(){
    this.estudiantes = [
    {id: 1, name: "ben kenobi", age: 47},
    {id: 2, name: "darth  vader", age: 83},
    {id: 3, name: "luke skywalker", age: 25},
    {id: 4, name: "jin darin", age: 23},
    {id: 5, name: "boba fett", age: 42}
    ];
    this.nElementos = this.estudiantes.length;
  }


  insertarEstudiante(): void {
    this.estudiantes.push({id: this.nElementos+1, name: "yoda", age: 500})
}

}
