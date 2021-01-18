import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarTareaComponent } from './components/agregar-editar-tarea/agregar-editar-tarea.component';
import { VerTareaComponent } from './components/ver-tarea/ver-tarea.component';
import { ListarTareaComponent } from './components/listar-tarea/listar-tarea.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarEditarTareaComponent },
  { path: 'editar/:id', component: AgregarEditarTareaComponent },
  { path: 'ver/:id', component: VerTareaComponent },
  { path: 'singin', component: LoginComponent },
  { path: '', component: ListarTareaComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
