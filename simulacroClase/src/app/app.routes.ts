import { Routes } from '@angular/router';
import { Landingpage } from './pages/landingpage/landingpage';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { List } from './pages/list/list';

export const routes: Routes = [

    { path: "", pathMatch: 'full', redirectTo: "inicio" },
    { path: "inicio", component: Landingpage },
    { path: "login", component: Login },
    {path: "dashboard", component: Dashboard, canActivate: [], children:[
                { path: "", pathMatch: "full", redirectTo: "list" },
                { path: "list", component: List },
            ]
    },
    { path: "**", redirectTo: "inicio" }

];
