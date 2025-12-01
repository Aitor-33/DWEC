import { Routes } from '@angular/router';
import { PageHome } from './pages/page-home/page-home';
import { PageCarrito } from './pages/page-carrito/page-carrito';
import { PageFormulario } from './pages/page-formulario/page-formulario';
import { PageVerMas } from './pages/page-ver-mas/page-ver-mas';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: PageHome },
    { path: 'carrito', component: PageCarrito },
    { path: 'formulario', component: PageFormulario },
    { path: 'ver-mas/:id', component: PageVerMas },
    // { path: '**', component: Page404Componet }
    { path: '**', redirectTo: 'home' }

];
