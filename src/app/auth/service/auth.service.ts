import { environment } from './../../../environments/environment';
import { CurrentUserInterface } from './../../shared/types/current-user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from '../types/register-request.interface';
import { authResponseInterface } from '../types/auth-response.interface';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<authResponseInterface>(url, data)
      .pipe(map((response: authResponseInterface) => response.user))
  }
}
