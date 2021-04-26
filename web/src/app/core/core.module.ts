import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { TokenService } from './token/token.service';
import { UserService } from './user/user.service';
import { NotificationService } from '../shared/services/notification.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserService, TokenService, AuthService, NotificationService]
})
export class CoreModule { }
