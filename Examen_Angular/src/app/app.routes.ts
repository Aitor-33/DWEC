import { Routes } from '@angular/router';
import { PageListaProductos } from './pages/page-lista-productos/page-lista-productos';
import { PageFormulario } from './pages/page-formulario/page-formulario';
import { PageVerMas } from './pages/page-ver-mas/page-ver-mas';

export const routes: Routes = [
        //esta ruta es para que si pones algo que no salga te lleve al ome
    { path: '', pathMatch: 'full', redirectTo: 'lista' },
    // la ruta de home
    { path: 'lista', component: PageListaProductos },
    { path: 'formulario', component: PageFormulario },
    //la ruta para el ver mas
    { path: 'ver-mas/:id', component: PageVerMas },
    { path: 'formulario/:id', component: PageFormulario },

    { path: '**', redirectTo: 'lista' }

];

