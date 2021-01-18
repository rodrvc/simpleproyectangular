import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styleUrls: ['./ver-tarea.component.css'],
})
export class VerTareaComponent implements OnInit {
  loading = false;
  tarea: Tarea;
  tareas: any;
  idTarea: string;

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute
  ) {
    this.idTarea = this.route.snapshot.paramMap.get('id');
    console.log(this.idTarea);
  }

  ngOnInit(): void {
    this.getOneTarea();
  }

  getOneTarea() {
    this.loading = true;
    this.tareaService.getOneTarea(this.idTarea).subscribe((data) => {
      this.loading = false;
      this.tarea = data;
    });
  }
}
