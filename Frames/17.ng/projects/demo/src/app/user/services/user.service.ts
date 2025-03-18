import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

type UserLogin = {
  email: string;
  password: string;
};

type UserLogged = {
  email: string;
  iat: number;
  id: string;
  role: string;
};

type ApiResponse = {
  results: { token: string };
  error: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/api/users';
  private httpClient = inject(HttpClient);
  private _token: string | null = null;
  private _currentUser: UserLogged | null = null;

  get token() {
    return this._token;
  }

  get currentUser() {
    return this._currentUser;
  }

  login(data: UserLogin) {
    console.log(data);
    const url = this.url + '/login';
    this.httpClient
      .post<ApiResponse[]>(url, data)
      .pipe(map((r) => r[0].results.token))
      .subscribe({
        next: (token) => {
          console.log(token);
          localStorage.setItem('token', token);
          location.href = '/';
        },
        error: (error) => {
          console.error('Error login user', error);
        },
      });
  }

  getToken() {
    this._token = localStorage.getItem('token');
    if (this._token) {
      this._currentUser = jwtDecode(this._token);
      console.log('Token', this._token);
      console.log('User', this._currentUser);
    }
  }
}
