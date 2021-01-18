import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TareaService } from 'src/app/services/tarea.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Loading = false;
  singin: FormGroup;
  usuario: User;

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    private router: Router
  ) {
    this.singin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  test() {
    console.log('Esto es una prueba');
  }

  obtenerUsuario() {
    if (this.singin) {
      //this.accion = 'Editar';
      //console.log(this.accion + 'editar acctivated');

      const a: User = {
        email: this.singin.get('email').value,
        password: this.singin.get('password').value,
        name: null,
        autor: null,
      };

      this.tareaService.singin(a).subscribe((data) => {
        this.usuario = data;
        this.singin.patchValue({
          email: data.email,
          password: data.password,
        });
        if (data) {
          this.router.navigate(['/']);
          console.log('Se procede a editar');
        }
        localStorage.setItem('sesion', data.email);

        console.log(data);
      });
    }
  }
}
