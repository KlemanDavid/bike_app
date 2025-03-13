import { Component } from '@angular/core';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-add-bike',
  template: `
  <div class="container mt-5">
    <h2>Új kerékpár hozzáadása</h2>
    <form (ngSubmit)="onSubmit()">
      <div class="mb-3">
        <label for="brand" class="form-label">Márka</label>
        <input type="text" class="form-control" id="brand" [(ngModel)]="bike.brand" name="brand" required>
      </div>
      <div class="mb-3">
        <label for="model" class="form-label">Modell</label>
        <input type="text" class="form-control" id="model" [(ngModel)]="bike.model" name="model" required>
      </div>
      <button type="submit" class="btn btn-success">Hozzáadás</button>
    </form>
  </div>
  `
})
export class AddBikeComponent {
  bike = { brand: '', model: '' };

  constructor(private bikeService: BikeService) { }

  onSubmit(): void {
    this.bikeService.addBike(this.bike).subscribe({
      next: response => {
        console.log('Kerékpár sikeresen hozzáadva:', response);
      },
      error: err => {
        console.error('Hiba a kerékpár hozzáadásakor:', err);
      }
    });
  }
}