import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, filter, map, pluck, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { NotificationService } from 'src/app/shared/services/notification.service';
import { Token } from '../token/model/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private notificationService: NotificationService) { }

  login(username: string, password: string): Observable<Token> {

    return this.http.post<Token>(`${environment.apiUrl}/userInfo/authenticateUser`, { username, password })
      .pipe(
        tap(token => {

        if (token.token) this.userService.setToken(token.token);
        else this.notificationService.alert('User was not found.');

      }), catchError((error: HttpErrorResponse) => {
        throw new Error(error.message);
      }));

  }

}
