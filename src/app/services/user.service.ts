import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../models/form/register.form';
import { User } from '../models/dto/user.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginForm } from '../models/form/login.form';
import { Auth } from '../models/dto/auth.model';

const BASE_URL = 'http://localhost:8080/api/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // utilisateurConnecte: boolean = false;
  private _isLogged$!:BehaviorSubject<boolean>;


  constructor(
    private readonly http: HttpClient
  ) { 
      this._isLogged$ = new BehaviorSubject<boolean>(!!this.auth)
  }

  get isLogged(){
    return this._isLogged$.value
  }
  get isLogged$(){
    return this._isLogged$.asObservable()
  }
  
 

  register(user: RegisterForm): Observable<User> {
    return this.http.post<User>(BASE_URL + '/register', user)
  }

  login(user: LoginForm): Observable<Auth> {
    return this.http.post<Auth>(BASE_URL + '/login', user).pipe(
      tap(auth => this.auth = auth)
    );
  }

  logout(){
    this.auth = null;
  }

  get auth() {
    const authString = localStorage.getItem('auth');
    if( authString ){
      return JSON.parse(authString) as Auth;
    }
    else {
      return null;
    }
  }

  set auth(auth: Auth | null){
    if(auth){
      localStorage.setItem('auth', JSON.stringify(auth));
      this._isLogged$.next(true);
      console.log("ok")
      
    }
    else {
      localStorage.removeItem('auth');
      this._isLogged$.next(false);
      console.log("ko")

    }

  }
}

