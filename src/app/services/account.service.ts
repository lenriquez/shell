import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../dtos/Login';
import { LoginSuccess } from '../dtos/LoginSuccess';

@Injectable()
export class AccountService {
  authBaseUrl = 'Auth';
  applicationUserBaseUrl = 'applicationusers';
  identityCookie = '.AspNetCore.Identity.Application';

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<LoginSuccess> {
    return this.http.post<LoginSuccess>(`${this.authBaseUrl}/login`, login);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.authBaseUrl}/logout`, {});
  }

  validateLogin(): Observable<LoginSuccess> {
    return this.http.get<LoginSuccess>(`${this.authBaseUrl}/validateLogin`);
  }

  heartBeat(): Observable<any> {
    return this.http.get(`${this.authBaseUrl}/active`);
  }
}
