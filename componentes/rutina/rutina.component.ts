import { Component, OnInit } from '@angular/core';
import { RutinaService } from 'src/app/services/rutina.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit { // Cambié ProductosComponent por RutinaComponent
  scrollPosition = 0;
  rutinas: any[] = [];
  newRutina: any = {};
  editingRutina: any = null;
  selectedFile: File | null = null; 
  error = '';
  filter: string = '';

  private apiUrl = 'http://localhost:3000/api/rutina'; // Mantengo la URL por si es usada en algún otro lugar

  constructor(private rutinaService: RutinaService, private router: Router) { }

  ngOnInit(): void {
    this.loadRutinas();
  }

  loadRutinas(): void {
    this.rutinaService.getRutinas().subscribe(
      data => {
        this.rutinas = data;
      },
      err => {
        console.error('Error obteniendo rutinas:', err); // Cambié productos por rutinas
        this.error = 'Error en el servidor al obtener rutinas.'; // Cambié el mensaje
      }
    );
  }

  onFileChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files && element.files.length > 0) {
      this.newRutina.imagen_url = element.files[0]; // Cambié imagen_pro por imagen_url
    }
  }

  createRutina(): void {
    this.rutinaService.createRutina(this.newRutina).subscribe(
      data => {
        this.rutinas.push(data);
        this.newRutina = {};
        this.router.navigate(['rutina']);
      },
      err => {
        console.error('Error creando rutina:', err); // Cambié producto por rutina
        this.error = 'Error en el servidor al crear rutina.'; // Cambié el mensaje
      }
    );
  }

  editRutina(rutina: any): void {
    this.editingRutina = { ...rutina };
  }

  updateRutina(id_rutina: number): void { // Cambié upateRutina por updateRutina
    if (this.selectedFile && !this.editingRutina.imagen_url) { // Cambié imagen_pro por imagen_url
      this.rutinaService.uploadImagen(this.selectedFile).subscribe(
        response => {
          this.editingRutina.imagen_url = response.imageUrl; // Cambié imagen_pro por imagen_url
          this.saveUpdatedRutina(id_rutina);
        },
        error => {
          console.error('Error al cargar la imagen:', error);
        }
      );
    } else {
      this.saveUpdatedRutina(id_rutina);
    }
  }

  saveUpdatedRutina(id_rutina: number): void {
    this.rutinaService.updateRutina(id_rutina, this.editingRutina).subscribe(
      data => {
        const index = this.rutinas.findIndex(p => p.id_rutina === id_rutina);
        if (index !== -1) {
          this.rutinas[index] = data;
        }
        this.editingRutina = null;
      },
      err => {
        console.error('Error actualizando rutina:', err); // Cambié producto por rutina
        this.error = 'Error en el servidor al actualizar rutina.'; // Cambié el mensaje
      }
    );
  }

  deleteRutina(id: number): void {
    if (id) {
      this.rutinaService.deleteRutina(id).subscribe(
        data => {
          this.rutinas = this.rutinas.filter(p => p.id_rutina !== id);
          this.router.navigate(['rutina']);
        },
        err => {
          console.error('Error eliminando la rutina:', err); // Cambié producto por rutina
          this.error = 'Error en el servidor al eliminar rutina.'; // Cambié el mensaje
        }
      );
    } else {
      console.error('No se encontró la rutina:', id); // Cambié ejercicio por rutina
    }
  }
}
