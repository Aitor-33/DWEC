import { Routes } from '@angular/router';
import { appConfig } from './app.config';
import { Home } from './pages/home/home';
import { ListHero } from './pages/list-hero/list-hero';
import { FormComponents } from './pages/form/form';
import { InicioSesion } from './pages/inicio-sesion/inicio-sesion';
import { Dashboard } from './pages/dashboard/dashboard';
import { loginGuardGuard } from './guards/login-guard-guard';
import { HeroVist } from './pages/hero-vist/hero-vist';

export const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: 'home'},
   {path: 'home', component: Home},
   {path: 'inicio', component: InicioSesion},
   {
      path: "dashboard", component: Dashboard, canActivate: [loginGuardGuard], children :
      [
         {path: 'ListaHero', component: ListHero},
         {path: 'formulairo', component: FormComponents},
         {path: 'formulairo/:id', component: FormComponents},
         {path: 'listahero/:id', component: HeroVist},
      ]
   },
   {path: '**', redirectTo: 'home'}
];
