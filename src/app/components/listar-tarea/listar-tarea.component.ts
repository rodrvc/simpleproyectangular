import { Component, OnInit } from '@angular/core';
import { Tarea } from './../../models/Tarea';
import { TareaService } from './../../services/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-tarea',
  templateUrl: `./listar-tarea.component.html`,
  styleUrls: ['./listar-tarea.component.css'],
})
export class ListarTareaComponent implements OnInit {
  listarTareas: Tarea[];
  loading = false;
  //tarea: Tarea[];
  listaDeTareasPrueba = ['sacar la basura', 'barrer '];
  titulo = 'Esto es un titulo';
  tarea: any;

  constructor(private tareaService: TareaService, private router: Router) {
    //this.tarea;
    //this.titulo;
  }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas() {
    this.loading = true;
    this.tareaService
      .getListTarea(localStorage.getItem('sesion'))
      .subscribe((data) => {
        this.loading = false;

        this.listarTareas = data;

        this.tarea = data;

        Object.keys(this.tareaService.getListTarea);
        console.log(localStorage.getItem('sesion'));
        console.log(this.tarea);
      });
  }

  getSesion() {
    return localStorage.getItem('sesion');
  }

  borrarTarea(id: string) {
    this.loading = true;
    this.tareaService.getListEliminar(id).subscribe((data) => {
      alert('se debe recargar la pagina');
      this.loading = false;
      this.getTareas();
    });
    this.getTareas();
    this.router.navigate(['/']);
  }
}
