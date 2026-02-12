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
      image2: new FormControl(null,[Validators.required,  Validators.minLength(3)],),
      image3: new FormControl(null,[Validators.required, Validators.minLength(3)]),
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

  // Obtener valores del formulario
  const formValue = this.newHeroForm.value;

  // Construir el objeto héroe con la estructura correcta
  const heroe: Iheroe = {
    heroname: formValue.heroname,
    fullname: formValue.fullname,
    image1: formValue.image1,
    image2: formValue.image2,  // ← Mayúscula en el form
    image3: formValue.image3,  // ← Mayúscula en el form
    gender: formValue.gender,
    race: formValue.race,
    alignment: formValue.alignment,
    powerstats: {
      intelligence: formValue.intelligence,
      strength: formValue.strength,
      speed: formValue.speed,
      durability: formValue.durability,
      power: formValue.power,
      combat: formValue.combat
    }
  };

  if(this.isNew){
    try {
      await this.heroeService.crearHeroe(heroe);
      Swal.fire({
        title: "Añadido",
        text: "Héroe añadido correctamente",
        icon: "success"
      });
      this.router.navigate(['/heroes']);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo añadir el héroe",
        icon: "error"
      });
      console.error('Error al crear héroe:', error);
    }
  } else {
    // await this.heroeService.updateEmployee(heroe);
    Swal.fire({
      title: "Editado correctamente",
      text: "Se ha editado correctamente el heroe",
      icon: "success"
    });
    this.router.navigate(['/heroes']);
  }
}



  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) =>{
      let _id: string = params._id;
      if(_id != undefined){
        let employee = await this.employeeServices.getEmployeeById(_id);
        if(employee != undefined){
          this.isNew = false;
          this.newEmployeeForm.patchValue(employee);
        } else if(employee == null){
          Swal.fire({
            title: "Error",
            text: "Error connecting to server",
            icon: "error"
          });
          this.router.navigate(['employees']);
        } else{
          Swal.fire({
            title: "Unkown",
            text: "Doesnt exist in our server",
            icon: "error"
          });
          this.router.navigate(['/employees']);
        }
      }
    })
  }


}
