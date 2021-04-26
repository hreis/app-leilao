import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { WinnerDialogComponent } from './winner-dialog/page/winner-dialog.component';

@NgModule({
  declarations: [WinnerDialogComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,

    MatCardModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class DialogModule { }
