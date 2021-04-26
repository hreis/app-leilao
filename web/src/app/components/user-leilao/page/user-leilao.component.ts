import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UserLeilaoService } from '../services/user-leilao.service';

@Component({
  selector: 'app-user-leilao',
  templateUrl: './user-leilao.component.html',
  styleUrls: ['./user-leilao.component.scss']
})
export class UserLeilaoComponent implements OnInit {

  fgBid: FormGroup;
  loading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private userLeilaoService: UserLeilaoService,
    private notificationService: NotificationService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.fgBid = this._formBuilder.group({
      fcBid: ['', Validators.compose([Validators.required, Validators.min(0.01), Validators.max(1000)])]
    });
  }

  onSubmit() {
    this.insertBid(this.fgBid.get('fcBid')?.value);
  }

  insertBid(bid: number) {

    let name = this.userService.getUsername();

    this.userLeilaoService.insertBid(bid, name, this.getDateNow())
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.notificationService.error(error.message);
          throw new Error(error.message);
        }))
      .subscribe(inserted => {

        switch (inserted) {
          case true:
            this.notificationService.success('Your bid was successfully inserted');
            break;
          case undefined:
            this.notificationService.success('Bid rated the limit of 999');
            break;
          case false:
            this.notificationService.success('Error to save your bid');
            break;
          default:
            break;
        }

      })
  }

  getDateNow(): string {
    var datePipe = new DatePipe('en-US');
    let now = new Date();
    return datePipe.transform(now, 'dd-MM-yyyy, h:mm:ss') || '';
  }

}
