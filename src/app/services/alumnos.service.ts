import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from '../model/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumno[] = [];

  alumnosChanged = new Subject<Alumno[]>();

  constructor(private httpClient: HttpClient) {}

  fetchData() {
    this.httpClient.get("https://localhost:7175/api-alumnos").subscribe(data =>{
      Object.assign(this.alumnos, data);
      this.alumnosChanged.next(this.alumnos);
    });
    console.log(this.alumnos);
    
  }
}
