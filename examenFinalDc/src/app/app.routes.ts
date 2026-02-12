import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { LandingPage } from './pages/landing-page/landing-page';
import { Dashboard } from './components/dashboard/dashboard';
import { HeroList } from './pages/hero-list/hero-list';
import { HeroForm } from './pages/hero-form/hero-form';
import { loginGuardGuard } from './guards/login-guard-guard';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'landingpage' },
    { path: 'landingpage', component: LandingPage },
    { path: 'login', component: Login },
    {
        path: "dashboard", component: Dashboard, canActivate: [loginGuardGuard], children:
            [
                { path: "", pathMatch: "full", redirectTo: "heroes" },
                { path: "heroes", component: HeroList },
                { path: "formulario", component: HeroForm }
            ]
    }
];
