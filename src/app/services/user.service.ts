import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../models/form/register.form';
import { User } from '../models/dto/user.model';
import { Observable } from 'rxjs';
import { LoginForm } from '../models/form/login.form';

const BASE_URL = 'http://localhost:8080/api/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient
  ) { }

  register(user: RegisterForm): Observable<User> {
    return this.http.post<User>(BASE_URL + '/register', user)
  }

  login(user: LoginForm): Observable<User> {
    return this.http.post<User>(BASE_URL + '/login', user)
  }


}

