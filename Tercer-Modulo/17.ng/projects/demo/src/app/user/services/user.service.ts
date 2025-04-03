import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { DTOUser, User } from '../../core/types/user';

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

type LoginApiResponse = {
  results: { token: string };
  error: string;
};

type ApiResponse = {
  results: User[];
  error: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/api/users';
  private httpClient = inject(HttpClient);
  private _token = signal<string | null>(null);
  private _currentUser = signal<UserLogged | null>(null);

  token = computed(() => this._token());
  // token = this._token;
  currentUser = computed(() => this._currentUser());
  // currentUser = this._currentUser;

  login(data: UserLogin) {
    console.log(data);
    const url = this.url + '/login';
    this.httpClient
      .post<LoginApiResponse[]>(url, data)
      .pipe(map((r) => r[0].results.token))
      .subscribe({
        next: (token) => {
          console.log(token);
          localStorage.setItem('token', token);
          this._token.set(token);
          this._currentUser.set(jwtDecode(token));
        },
        error: (error) => {
          console.error('Error login user', error);
        },
      });
  }

  getToken() {
    this._token.set(localStorage.getItem('token'));

    const token = this._token();
    if (token) {
      this._currentUser.set(jwtDecode(token));
      console.log('Token', this._token());
      console.log('User', this._currentUser());
    }
  }

  getUserById(id: string) {
    // const x = this._currentUser()?.id;
    const url = this.url + '/' + id;
    return this.httpClient
      .get<ApiResponse>(url, {
        headers: {
          Authorization: `Bearer ${this.token()}`,
        },
      })
      .pipe(map((r) => r.results[0]));
  }

  register(data: DTOUser) {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('avatar', data.avatar as Blob);
    console.log(formData);
    console.log(Object.fromEntries(formData));
    const url = this.url + '/register';
    return this.httpClient
      .post<ApiResponse>(url, formData)
      .pipe(map((r) => r.results[0]));
  }

  logout() {
    localStorage.removeItem('token');
    this._token.set(null);
    this._currentUser.set(null);
    console.log('Token', this.token());
    console.log('User', this.currentUser());
  }
}
