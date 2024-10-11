import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {
  private apiUrl = 'http://localhost:3000/api'; // URL del backend

  constructor(private http: HttpClient) { }

  // Obtener todos los gimnasios
  getGimnasios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/gimnasios`);
  }

  // Obtener un gimnasio por ID
  getGimnasioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/gimnasios/${id}`);
  }

  // Crear un nuevo gimnasio
  createGimnasio(gimnasio: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/gimnasios`, gimnasio);
  }

  // Actualizar un gimnasio existente
  updateGimnasio(id: number, gimnasio: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/gimnasios/${id}`, gimnasio);
  }

  // Eliminar un gimnasio por ID
  deleteGimnasio(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/gimnasios/${id}`);
  }
}
