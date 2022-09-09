import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/model/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {
  alumnosList: Alumno[] = []
  private alumnosListSubs: Subscription = new Subscription();
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnosListSubs = this.alumnosService.alumnosChanged.subscribe(
      (alumnos) => {
        this.alumnosList = alumnos;
      }
    );

    this.alumnosService.fetchData();
  }

  ngOnDestroy(): void {
    this.alumnosListSubs.unsubscribe();
  }

}
