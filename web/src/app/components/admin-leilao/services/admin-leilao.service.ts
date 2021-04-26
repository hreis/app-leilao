import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/core/token/token.service';
import { environment } from 'src/environments/environment';
import { Bid } from '../model/bid';

@Injectable({
  providedIn: 'root'
})
export class AdminLeilaoService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  token = this.tokenService.getToken();

  getBids(): Observable<Bid[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      }),
    };

    return this.http.get<Bid[]>(`${environment.apiUrl}/bid/getBids`, httpOptions);

  }
}
