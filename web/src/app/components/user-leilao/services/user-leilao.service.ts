import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/core/token/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLeilaoService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  token = this.tokenService.getToken();

  insertBid(bid: number, username: string, date: string): Observable<boolean> {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      }),
    };

    return this.http.post<boolean>(`${environment.apiUrl}/bid/insertBid`, { bid, username, date }, httpOptions);

  }
}
