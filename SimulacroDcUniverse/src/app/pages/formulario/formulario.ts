import { HeroeService } from './../../services/heroe-service';
import { Component, inject } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Iheroe } from '../../interfaces/iheroe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  imports: [Navbar, ReactiveFormsModule, RouterLink],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  newHeroForm: FormGroup;
  heroeService = inject(HeroeService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isNew: boolean;

  constructor(){
    this.newHeroForm = new FormGroup({
      heroname: new FormControl(null,[]),
      fullname: new FormControl(null, []),
      image1: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      Image2: new FormControl(null,[Validators.required,  Validators.minLength(3)],),
      Image3: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      gender: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      race: new FormControl(null,[Validators.required]),
      alignment: new FormControl(null,[Validators.required, Validators.minLength(8)]),
// powerstats
      intelligence: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      strength: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      speed: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      durability: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      power: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      combat: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)])
    });
    this.isNew = true;
  }


  async getDataForm(){
    if(this.newHeroForm.invalid) return;
    let heroe = this.newHeroForm.value as Iheroe;
    if(this.isNew){
      heroe.id = -1; //El id lo gestiona el backend, le ponemos -1 para que no de error
      await this.heroeService.crearHeroe(heroe);
      Swal.fire({
        title: "Added",
        text: "heroe successfully added",
        icon: "success"
      });
    }
    else{
      // await this.heroeService.updateEmployee(heroe);
      Swal.fire({
        title: "Editado correctamente",
        text: "Se ha editado correctamente el heroe",
        icon: "success"
      });
    }
    this.router.navigate(['/heroes']);
  }

}
