import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SHeroes } from '../../service/s-heroes';
import { Iheroe } from '../../interface/iheroe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form.components',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormComponents {

  heroForm: FormGroup;
  heroService = inject(SHeroes);
  activateRoute = inject(ActivatedRoute);
  router = inject(Router);
  isNew: boolean;

  constructor(){
    this.isNew = true;
    this.heroForm = this.createForm();
  }

  private createForm(): FormGroup{
    return new FormGroup({
      id: new FormControl(null),
      heroname: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required]),
      image1: new FormControl('', [Validators.required]),
      image2: new FormControl('', [Validators.required]),
      image3: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      alignment: new FormControl('', [Validators.required]),
      // Powerstats
      intelligence: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      strength: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      speed: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      durability: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      power: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      combat: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)])
    });
  }

  getDataForm(){
    if (this.heroForm.invalid) return;

    // Construir el objeto Iheroe con la estructura correcta
    const formValue = this.heroForm.value;
    
    const heroe: Iheroe = {
      id: formValue.id,
      heroname: formValue.heroname,
      fullname: formValue.fullname,
      image1: formValue.image1,
      image2: formValue.image2,
      image3: formValue.image3,
      gender: formValue.gender,
      race: formValue.race,
      alignment: formValue.alignment,
      powerstats: {
        id: formValue.id,
        intelligence: formValue.intelligence,
        strength: formValue.strength,
        speed: formValue.speed,
        durability: formValue.durability,
        power: formValue.power,
        combat: formValue.combat
      }
    };

    if(this.isNew){
      this.heroService.crearHeroe(heroe).then(response => {
        alert("Héroe creado exitosamente");
        this.heroForm.reset();
        this.router.navigate(['/dashboard/ListaHero']);
      }).catch(error => {
        console.error('Error al crear héroe ', error);
        alert('Error al crear el héroe');
      });
    } else {
      this.heroService.actualizarHeroe(heroe).then(response => {
        alert('Héroe actualizado correctamente');
        this.heroForm.reset();
        this.router.navigate(['/dashboard/ListaHero']);
      }).catch(error => {
        console.error('Error al actualizar héroe', error);
        alert('Error al actualizar el héroe');
      });
    }
  }

  ngOnInit(): void{
    this.activateRoute.params.subscribe((params: any) => {
      let id: number = params.id;
      if(id != undefined){
        this.heroService.getById(id).then(heroe => {
          if(heroe != undefined){
            this.isNew = false;
            
            // Mapear powerstats al formulario plano
            this.heroForm.patchValue({
              id: heroe.id,
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
          } else {
            alert("No se encuentra el héroe");
            this.router.navigate([`/dashboard/ListaHero`]);
          }
        }).catch(error => {
          console.error('Error al cargar héroe', error);
          alert("Error al cargar el héroe");
          this.router.navigate(['/dashboard/ListaHero'])
        })
      }
    })
  }
}