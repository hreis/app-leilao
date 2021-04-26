import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'user-leilao',
    loadChildren: () =>
      import('./components/user-leilao/user-leilao.module').then((m) => m.UserLeilaoModule),
  },
  {
    path: 'admin-leilao',
    loadChildren: () =>
      import('./components/admin-leilao/admin-leilao.module').then((m) => m.AdminLeilaoModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
