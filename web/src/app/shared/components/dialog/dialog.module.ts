import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { WinnerDialogComponent } from './winner-dialog/page/winner-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [WinnerDialogComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,

    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class DialogModule { }
