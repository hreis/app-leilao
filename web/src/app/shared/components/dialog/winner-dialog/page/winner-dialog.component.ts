import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { IBidWinnerDTO } from '../model/bidWinnerDTO';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IBidWinnerDTO,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

}
