import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroService } from '../../services/hero-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IHero } from '../../interfaces/ihero';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './hero-form.html',
  styleUrl: './hero-form.css',
})
export class HeroForm {
  newHeroForm: FormGroup;
  heroService = inject(HeroService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isNew: boolean;

  constructor() {

    this.newHeroForm = new FormGroup({
      id: new FormControl(null, []),
      heroname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      fullname: new FormControl(null, [Validators.required, Validators.minLength(3)],),
      image1: new FormControl(null, [Validators.required]),
      image2: new FormControl(null, [Validators.required]),
      image3: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      race: new FormControl(null, [Validators.required]),
      alignment: new FormControl(null, [Validators.required]),
    });
    this.isNew = true;

  }

  async getDataForm(){

    if(this.newHeroForm.invalid) return;

    let hero = this.newHeroForm.value as IHero
if(this.isNew){
      hero.id = -1; //El id lo gestiona el backend, le ponemos -1 para que no de error
      await this.heroService.createHero(hero);
      Swal.fire({
        title: "Añadido correctamente",
        text: "Se ha creado correctamente el heroe",
        icon: "success"
      });
    }
    else{
      await this.heroService.updateHero(hero);
      Swal.fire({
        title: "Editado correctamente",
        text: "Se ha editado correctamente el heroe",
        icon: "success"
      });
    }
    this.router.navigate(['/dashboard/heroes']);


  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) =>{
      let id: number = params.id;
      if(id != undefined){
        let user = await this.heroService.getHeroById(id);
        if(user != undefined){
          this.isNew = false;
          this.newHeroForm.patchValue(user);
        } else if(user == null){
          Swal.fire({
            title: "Error",
            text: "Se ha producido un error al conectar con el servicio",
            icon: "error"
          });
          this.router.navigate(['home']);
        } else{
          Swal.fire({
            title: "Desconocido",
            text: "No se encuentra el heroe en nuestro servicio",
            icon: "error"
          });
          this.router.navigate(['/home']);
        }
      }
    })
  }

  checkControl(FormControlName: string, validator: string): boolean | undefined{
    return this.newHeroForm.get(FormControlName)?.hasError(validator) && this.newHeroForm.get(FormControlName)?.touched;
  }


}
