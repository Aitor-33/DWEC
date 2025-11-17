import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-reactive-forms-model',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms-model.html',
  styleUrl: './reactive-forms-model.css',
})
export class ReactiveFormsModel {

  modelForm: FormGroup;
  private id: number = 0;

  constructor(){
    this.modelForm = new FormGroup({
      //este nombre tiene que ser igual que en el FormControl del html
      nombre: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, []),
      edad: new FormControl(null, []),
      dni: new FormControl(null, []),
      password: new FormControl(null, []),
      RepitePassword: new FormControl(null, []),
    }, [])
  }

  getDataForm() {
    let user = this.modelForm.value as IUser;
    user.id = this.id;
    console.log(user);
    this.modelForm.reset();
    this.id++;
  }

}
