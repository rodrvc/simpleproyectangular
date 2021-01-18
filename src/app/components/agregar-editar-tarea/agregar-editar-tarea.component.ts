import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/Tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-agregar-editar-tarea',
  templateUrl: './agregar-editar-tarea.component.html',
  styleUrls: ['./agregar-editar-tarea.component.css'],
})
export class AgregarEditarTareaComponent implements OnInit {
  tareas: FormGroup;
  idTarea = '';
  accion = 'Agregar';
  Loading = false;
  tarea: Tarea;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private router: Router
  ) {
    this.tareas = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      autor: ['', Validators.required],
      fecha: ['', Validators.required],
    });
    console.log('se pasa por el constructor1 ');
    console.log(this.route.snapshot.paramMap.get('id'));
    if (this.route.snapshot.paramMap.get('id')) {
      this.idTarea = this.route.snapshot.paramMap.get('id');
      console.log('se pasa por el constructor2 ');
      this.idTarea = this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.esEditar();
    console.log('se ejecuta' + this.accion);
  }

  guardarTarea() {
    if (this.accion === 'Agregar') {
      const tarea: Tarea = {
        fecha: this.tareas.get('fecha').value,
        titulo: this.tareas.get('titulo').value,
        autor: localStorage.getItem('sesion'),
        descripcion: this.tareas.get('descripcion').value,
      };
      this.tareaService.createtask(tarea).subscribe((data) => {
        this.router.navigate(['/']);
      });
    } else {
      const tarea: Tarea = {
        fecha: this.tareas.get('fecha').value,
        titulo: this.tareas.get('titulo').value,
        autor: this.tareas.get('autor').value,
        descripcion: this.tareas.get('descripcion').value,
      };
      this.tareaService.updateTarea(this.idTarea, tarea).subscribe((data) => {
        this.router.navigate(['/']);
        console.log('Se procede a editar');
      });
    }
    console.log(this.tareas);
  }

  esEditar() {
    if (this.idTarea) {
      this.accion = 'Editar';
      console.log(this.accion + 'editar acctivated');
      this.tareaService.getOneTarea(this.idTarea).subscribe((data) => {
        this.tarea = data;
        this.tareas.patchValue({
          titulo: data.titulo,
          autor: data.autor,
          descripcion: data.descripcion,
          fecha: data.fecha,
        });
        console.log(data);
      });
    }
    //console.log(this.tareas);
  }
}
