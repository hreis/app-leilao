import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { HttpClient } from '@angular/common/http';

const KEY_ROLE = 'userRole';

@Injectable({ providedIn: 'root' })
export class UserService {

  public userName: string;
  public userRole: string;

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    let user = this.decodeAndNotify();

    this.userRole = user.role;
    this.userName = user.username;
  }

  setRole(role: string) {
    this.userRole = role;
  }

  getRole(): string {
    let user = this.decodeAndNotify();
    this.userRole = user.role;
    return this.userRole;
  }

  getUsername(): string {
    let user = this.decodeAndNotify();
    this.userName = user.username;
    return this.userName;
  }

  private decodeAndNotify() {

    const token = this.tokenService.getToken();

    try {

      if(token) return JSON.parse(atob(token.split('.')[1]));

    } catch (e) {
      console.log(`Nao foi possivel decodificar o token`)
    }

  }

  logout() {
    this.tokenService.removeToken();
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

}
