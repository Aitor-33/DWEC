import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceApi } from '../../services/service-api';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { InterfaceUsuario } from '../../interfaces/interface-usuario.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-formulario',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './page-formulario.html',
  styleUrl: './page-formulario.css',
})
export class PageFormulario {

  usuarioForm: FormGroup;

  isNew: boolean;

  Sapi = inject(ServiceApi)

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);


  constructor() {

    this.isNew = true;
    this.usuarioForm = new FormGroup({
      //aqui cojo las cosas del formulario
      _id: new FormControl(null, [Validators.required]),
      id: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      image: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    }, []);

  }

  //aqui recojo los datos del formulario y lo inserto en el array
  async getDataForm() {
    let usuario = this.usuarioForm.value as InterfaceUsuario;

    if (this.isNew) {

      const response = await this.Sapi.insertarUsuario(usuario);
      if (response.id) {

              Swal.fire({
                title: 'Insertado',
                text: 'El usuario: ' + usuario.username + ' se ha insertado correctamente',
                icon: 'success',
                confirmButtonText: 'aceptar',
                timer: 6000
              })

      }

    } else {

      const response = await this.Sapi.updateUsuario(usuario);
      if (response.id) {

              Swal.fire({
                title: 'Atualizado',
                text: 'El usuario: ' + usuario.username + ' ha sido actualizado',
                icon: 'success',
                confirmButtonText: 'aceptar',
                timer: 6000
              })

      }


    }

    console.log(usuario);

    this.usuarioForm.reset();

    this.router.navigate(['home'])

  }




  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let _id: string = params._id;
      if (_id != undefined) {
        //Pedir al servicio la serie por _id
        let usuario = await this.Sapi.getUsersBy_Id(_id);
        if (usuario != undefined) {
          this.isNew = false;
          this.usuarioForm = new FormGroup({
            _id: new FormControl(usuario._id, [Validators.required]),
            id: new FormControl(usuario.id, [Validators.required]),
            username: new FormControl(usuario.username, [Validators.required, Validators.minLength(3)]),
            first_name: new FormControl(usuario.first_name, [Validators.required]),
            last_name: new FormControl(usuario.last_name, [Validators.required]),
            email: new FormControl(usuario.email, [Validators.required, Validators.email]),
            image: new FormControl(usuario.image, [Validators.required]),
            password: new FormControl(usuario.password, [Validators.required, Validators.minLength(8)]),
          }, []);
        } else {
                Swal.fire({
                  title: 'error',
                  text: 'no se encuentra el usuario',
                  icon: 'error',
                  confirmButtonText: 'aceptar',
                  timer: 6000
                })
        }
      }
    });
  }



  //esto es para las lineas rojas cuando no esta bien el formato y todo eso
  checkControl(formControlName: string, validator: string): boolean | undefined {
    return this.usuarioForm.get(formControlName)?.hasError(validator) && this.usuarioForm.get(formControlName)?.touched
  }


}
