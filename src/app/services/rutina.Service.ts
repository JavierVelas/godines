import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  
  getRutinas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rutinas`);
  }

  
  getRutinasById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/rutinas/${id}`);
  }

  
  createRutina(rutina: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/rutinas`, rutina);
  }

 
  updateRutina(id: number, rutina: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/rutinas/${id}`, rutina);
  } 

  deleteRutina(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/rutinas/${id}`);
  }

  uploadImagen(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<any>(`${this.apiUrl}/uploads`, formData);
  }
}
