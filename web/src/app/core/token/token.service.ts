import { Injectable } from '@angular/core';

const KEY = 'authToken';
const KEY_EXPIRE = 'expiresIn';

@Injectable({ providedIn: 'root' })
export class TokenService {

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  public decode(token: string) {

    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.log(`Nao foi possivel decodificar o token`)
    }
  }

  setExpirationDate(expiresIn: string) {
    window.localStorage.setItem(KEY_EXPIRE, expiresIn);
  }

  killToken() {
    window.localStorage.removeItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }

}
