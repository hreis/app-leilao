import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLeilaoComponent } from './page/admin-leilao.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLeilaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLeilaoRoutingModule { }
