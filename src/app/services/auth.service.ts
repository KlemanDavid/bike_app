import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Állítsd be az API URL-t, itt például a tanár REST API szervere http://localhost:3000
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Bejelentkezés: a /login végpontra küldjük a felhasználói adatokat
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (response && response.token) {
            // A kapott token-t elmentjük a böngésző localStorage-jába
            localStorage.setItem('auth_token', response.token);
          }
        })
      );
  }

  // Kijelentkezés: törli a token-t
  logout(): void {
    localStorage.removeItem('auth_token');
  }

  // Ellenőrzi, hogy a felhasználó be van-e jelentkezve
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
