import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBidWinnerDTO } from '../model/bidWinnerDTO';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent implements OnInit {

  fgWinner: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IBidWinnerDTO,
    private _formBuilder: FormBuilder
  ) { }


  initForm() {

  }
  ngOnInit(): void {

    this.fgWinner = this._formBuilder.group({
      fcBid: [{ value: this.data.bid.bid, disabled: true }],
      fcDate: [{ value: this.data.bid.date_bid, disabled: true }],
      fcIdBid: [{ value: this.data.bid.id_bid, disabled: true }],
      fcUserName: [{ value: this.data.bid.username, disabled: true }],
      dcTotalCollection: [{ value: this.data.collection, disabled: true }]
    });

  }

}
