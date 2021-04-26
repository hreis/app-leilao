import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLeilaoRoutingModule } from './admin-leilao-routing.module';
import { AdminLeilaoComponent } from './page/admin-leilao.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'src/app/shared/components/dialog/dialog.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AdminLeilaoComponent],
  imports: [
    CommonModule,
    AdminLeilaoRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    DialogModule,
    MatCardModule
  ]
})
export class AdminLeilaoModule { }
