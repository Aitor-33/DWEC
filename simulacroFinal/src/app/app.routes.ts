import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { ProductList } from './pages/product-list/product-list';
import { Formulario } from './pages/formulario/formulario';
import { guardGuard } from './guards/guard-guard';

export const routes: Routes = [

    { path: "", pathMatch: 'full', redirectTo: "inicio" },
    { path: "inicio", component: LandingPage },
    { path: "login", component: Login },
    { path: "dashboard", component: Dashboard, canActivate: [guardGuard], children:
            [
                { path: "", pathMatch: "full", redirectTo: "productos" },
                { path: "productos", component: ProductList },
                { path: "formulario", component: Formulario }
            ]
    },
    { path: "**", redirectTo: "inicio" }

];
