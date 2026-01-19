import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { UserForm } from './pages/user-form/user-form';
import { UserView } from './pages/user-view/user-view';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './pages/login/login';
import { loginGuardGuard } from './guards/login-guard-guard';

export const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'landingPage'},
  {path:'landingPage', component: LandingPage},
  {path:'login', component: Login}, //aqui lo que hago es poner la guarda de que si no está logueado no puede acceder a las paginas
  {path:'home', component: Home, canActivate: [loginGuardGuard]},
  {path: 'user-view', component: UserView, canActivate: [loginGuardGuard]},
  {path: 'user-view/:_id', component: UserView, canActivate: [loginGuardGuard]},
  {path:'user-form', component: UserForm, canActivate: [loginGuardGuard]},
  {path:'user-form/:_id', component: UserForm, canActivate: [loginGuardGuard]},
  {path:'**', redirectTo:'landingPage'}
];
