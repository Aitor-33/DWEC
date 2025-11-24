import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosProfesionalesComponent } from './pages/servicios-profesionales/servicios-profesionales.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Page404Component } from './pages/page404/page404.component';

export const routes: Routes = [
    {path:'' , pathMatch:'full', redirectTo: 'home'}, //esto lo que hace es que cualquier ruta vacia te lleve a home esto hace tambien que al iniciar el servidor te entre directamente en home
    { path:'home', component: HomeComponent },
    { path: 'servicios-profesionales', component: ServiciosProfesionalesComponent},
    { path: 'contacto', component: ContactComponent},
    { path: '**', component: Page404Component} //esta me gusta mas
    // {path: '**', redirectTo: 'home'} 
];
