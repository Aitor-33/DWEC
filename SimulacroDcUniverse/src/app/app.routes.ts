import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { loginguardGuard } from './guards/loginguard-guard';
import { Landingpage } from './pages/landingpage/landingpage';
import { Listcard } from './pages/listcard/listcard';
import { Formulario } from './pages/formulario/formulario';
import { Vermas } from './pages/vermas/vermas';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

  { path: 'landing', component: Landingpage },
  { path: 'login', component: Login },

  {
    path: '',
    canActivate: [loginguardGuard],
    children: [
      { path: 'heroes', component: Listcard },
      { path: 'formulario', component: Formulario },
      { path: 'formulario/:id', component: Formulario },
      { path: 'ver-mas/:id', component: Vermas },
    ]
  },

  { path: '**', redirectTo: 'login' }
];
