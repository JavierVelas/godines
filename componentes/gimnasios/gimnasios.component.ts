import { Component, OnInit } from '@angular/core';
import { GimnasioService } from 'src/app/services/gimnasios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gimnasios',
  templateUrl: './gimnasios.component.html',
  styleUrls: ['./gimnasios.component.css']
})
export class GimnasiosComponent implements OnInit {
  gimnasios: any[] = [];
  newGimnasio: any = {};
  editingGimnasio: any = null;
  error = '';

  constructor(private gimnasioService: GimnasioService, private router: Router) { }

  ngOnInit(): void {
    this.loadGimnasios();
  }

  loadGimnasios(): void {
    this.gimnasioService.getGimnasios().subscribe(
      data => {
        this.gimnasios = data;
      },
      err => {
        console.error('Error obteniendo gimnasios:', err);
        this.error = 'Error en el servidor al obtener gimnasios.';
      }
    );
  }

  createGimnasio(): void {
    this.gimnasioService.createGimnasio(this.newGimnasio).subscribe(
      data => {
        this.gimnasios.push(data);
        this.newGimnasio = {};
        this.editingGimnasio = null;
      },
      err => {
        console.error('Error al añadir el gimnasio:', err);
        this.error = 'Error en el servidor al añadir el gimnasio.';
      }
    );
  }

  editGimnasio(gimnasio: any): void {
    this.editingGimnasio = { ...gimnasio };
  }

  updateGimnasio(id_gimnasio: number): void {
    this.gimnasioService.updateGimnasio(id_gimnasio, this.editingGimnasio).subscribe(
      data => {
        const index = this.gimnasios.findIndex(g => g.id_gimnasio === id_gimnasio);
        if (index !== -1) {
          this.gimnasios[index] = data;
        }
        this.editingGimnasio = null;
      },
      err => {
        console.error('Error actualizando gimnasio:', err);
        this.error = 'Error en el servidor al actualizar gimnasio.';
      }
    );
  }

  deleteGimnasio(id_gimnasio: number): void {
    if (id_gimnasio) {
      this.gimnasioService.deleteGimnasio(id_gimnasio).subscribe(
        data => {
          this.gimnasios = this.gimnasios.filter(g => g.id_gimnasio !== id_gimnasio);
        },
        err => {
          console.error('Error eliminando gimnasio:', err);
          this.error = 'Error en el servidor al eliminar gimnasio.';
        }
      );
    } else {
      console.error('ID de gimnasio no válido:', id_gimnasio);
    }
  }

  cancelEdit(): void {
    this.editingGimnasio = null;
  }
}
