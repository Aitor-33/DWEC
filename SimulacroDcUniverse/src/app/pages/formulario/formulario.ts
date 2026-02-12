import { HeroeService } from './../../services/heroe-service';
import { Component, inject, OnInit } from '@angular/core';
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
export class Formulario implements OnInit {

  newHeroForm: FormGroup;
  heroeService = inject(HeroeService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isNew: boolean;
  heroeId?: number; // Para guardar el ID cuando estamos editando

  constructor(){
    this.newHeroForm = new FormGroup({
      heroname: new FormControl(null,[]),
      fullname: new FormControl(null, []),
      image1: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      image2: new FormControl(null,[Validators.required, Validators.minLength(3)]),
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

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params: any) => {
      const id = params.id; // Obtener el id de los parámetros

      if (id) {
        // Si hay un id, estamos en modo edición
        try {
          const heroe = await this.heroeService.getHeroeId(Number(id));

          if (heroe) {
            this.isNew = false;
            this.heroeId = heroe.id;

            // Cargar los datos del héroe en el formulario
            this.newHeroForm.patchValue({
              heroname: heroe.heroname,
              fullname: heroe.fullname,
              image1: heroe.image1,
              image2: heroe.image2,
              image3: heroe.image3,
              gender: heroe.gender,
              race: heroe.race,
              alignment: heroe.alignment,
              intelligence: heroe.powerstats.intelligence,
              strength: heroe.powerstats.strength,
              speed: heroe.powerstats.speed,
              durability: heroe.powerstats.durability,
              power: heroe.powerstats.power,
              combat: heroe.powerstats.combat
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "No se pudo cargar el héroe",
            icon: "error"
          });
          this.router.navigate(['/heroes']);
        }
      }
    });
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
      image2: formValue.image2,
      image3: formValue.image3,
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
      // CREAR NUEVO HÉROE
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
      // ACTUALIZAR HÉROE EXISTENTE
      heroe.id = this.heroeId; // Asignar el ID del héroe que estamos editando

      try {
        await this.heroeService.updateHeroe(heroe);
        Swal.fire({
          title: "Editado",
          text: "Héroe actualizado correctamente",
          icon: "success"
        });
        this.router.navigate(['/heroes']);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "No se pudo actualizar el héroe",
          icon: "error"
        });
        console.error('Error al actualizar héroe:', error);
      }
    }
  }
}
