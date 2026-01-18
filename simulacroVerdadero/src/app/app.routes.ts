import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Productlist } from './pages/productlist/productlist';
import { Userlist } from './pages/userlist/userlist';
import { loginGuardGuard } from './guards/login-guard-guard';

export const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },


  { path: 'login', component: Login },

  {
    path: '',
    canActivate: [loginGuardGuard],
    children: [
      { path: 'home', component: Home },
      { path: 'products', component: Productlist },
      { path: 'users', component: Userlist },
    ]
  },

  { path: '**', redirectTo: 'login' }
];
