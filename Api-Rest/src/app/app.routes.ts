import { Routes } from '@angular/router';
import { PageHome } from './pages/page-home/page-home';
import { PageFormulario } from './pages/page-formulario/page-formulario';
import { Page404 } from './pages/page-404/page-404';
import { ComponentVerMas } from './components/component-ver-mas/component-ver-mas';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // la ruta de home
    { path: 'home', component: PageHome },
    { path: 'formulario', component: PageFormulario },
    { path: 'ver-mas/:_id', component: ComponentVerMas },
    { path: 'formulario/:_id', component: PageFormulario },
    { path: '**', component: Page404 }

];
