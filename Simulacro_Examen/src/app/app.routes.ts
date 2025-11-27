import { Routes } from '@angular/router';
import { PageHome } from './pages/page-home/page-home';
import { PageCarrito } from './pages/page-carrito/page-carrito';
import { PageFormulario } from './pages/page-formulario/page-formulario';

export const routes: Routes = [

{ path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: PageHome },
    { path: 'carrito', component: PageCarrito },
<<<<<<< HEAD
    { path: 'producto/:id', component: SerieForm },
=======
    { path: 'formulario', component: PageFormulario },
>>>>>>> 7a531fe676c674dea2ce0c9cb2c38b4eeb8ac482
    // { path: '**', component: Page404Componet }
    { path: '**', redirectTo: 'home' }

];
