import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="container mt-5">
    <h2>Bejelentkezés</h2>
    <form (ngSubmit)="onSubmit()">
      <div class="mb-3">
        <label for="username" class="form-label">Felhasználónév</label>
        <input type="text" class="form-control" id="username" [(ngModel)]="credentials.username" name="username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Jelszó</label>
        <input type="password" class="form-control" id="password" [(ngModel)]="credentials.password" name="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Bejelentkezés</button>
    </form>
  </div>
  `
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: response => {
        console.log('Bejelentkezés sikeres:', response);
      },
      error: err => {
        console.error('Hiba a bejelentkezés során:', err);
      }
    });
  }
}