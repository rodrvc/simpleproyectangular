import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from './../models/Tarea';
import { User } from './../models/User';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  myAppUrl = 'http://localhost:8080/';
  myApiUrl = 'tarea/';
  users = 'signin/';
  add = 'add/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getListTarea(string: String): Observable<Tarea[]> {
    const filtradoTareas = this.http.get<Tarea[]>(
      this.myAppUrl + this.myApiUrl
    );
    //console.log(this.getListTarea('a'));
    return filtradoTareas;
  }

  getListEliminar(id: string): Observable<Tarea> {
    return this.http.delete<Tarea>(this.myAppUrl + this.myApiUrl + id);
  }

  createtask(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(
      this.myAppUrl + this.myApiUrl,
      tarea,
      this.httpOptions
    );
  }

  getOneTarea(id: string): Observable<Tarea> {
    return this.http.get<Tarea>(this.myAppUrl + this.myApiUrl + id);
  }

  updateTarea(id: String, tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(this.myAppUrl + this.myApiUrl + id, tarea);
  }

  singin(user: User): Observable<User> {
    return this.http.post<User>(
      this.myAppUrl + this.users,
      user,
      this.httpOptions
    );
  }

  adduser(user: User): Observable<User> {
    return this.http.post<User>(
      this.myAppUrl + this.add,
      user,
      this.httpOptions
    );
  }
}
