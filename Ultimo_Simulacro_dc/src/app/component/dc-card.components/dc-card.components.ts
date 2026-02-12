import { Component, inject, Input} from '@angular/core';
import { Router, RouterModule,} from '@angular/router';
import { SHeroes } from '../../service/s-heroes';
import { Iheroe } from '../../interface/iheroe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dc-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './dc-card.components.html',
  styleUrl: './dc-card.components.css',
})
export class DcCardComponents {

  sUsuarios = inject(SHeroes);
  router = inject(Router);
  @Input() hero!: Iheroe;

}
