import { Routes } from '@angular/router';
import { PageLandingPage } from './page/page-landing-page/page-landing-page';
import { PageLogin } from './page/page-login/page-login';
import { PageDashboard } from './page/page-dashboard/page-dashboard';
import { PageProductList } from './page/page-product-list/page-product-list';
import { PageUserList } from './page/page-user-list/page-user-list';
import { guardGuard } from './guards/guard-guard';

export const routes: Routes = [

    { path: "", pathMatch: 'full', redirectTo: "inicio" },
    { path: "inicio", component: PageLandingPage},
    { path: "login", component: PageLogin },
    {path: "dashboard", component: PageDashboard, canActivate: [guardGuard], children:
            [
                { path: "", pathMatch: "full", redirectTo: "productos" },
                { path: "productos", component: PageProductList },
                { path: "empleados", component: PageUserList }
            ]
    },
    { path: "**", redirectTo: "inicio" }

];
