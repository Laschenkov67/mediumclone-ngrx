import { IRegisterRequest } from './../types/register-request.interface';
import { IAuthResponse } from './../types/auth-response.interface';
import { environment } from './../../../environments/environment';
import { CurrentUserInterface } from './../../shared/types/current-user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(data: IRegisterRequest): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((response: IAuthResponse) => response.user))
  }
}
