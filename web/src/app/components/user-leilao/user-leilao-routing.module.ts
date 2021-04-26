import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLeilaoComponent } from './page/user-leilao.component';

const routes: Routes = [
  {
    path: '',
    component: UserLeilaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLeilaoRoutingModule { }
