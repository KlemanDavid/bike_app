import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Új kerékpár felvétele: a token az Authorization fejlécben kerül elküldésre
  addBike(bikeData: any): Observable<any> {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.apiUrl}/bikes`, bikeData, { headers });
  }
}
