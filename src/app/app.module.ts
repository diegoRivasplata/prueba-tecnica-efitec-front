import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlumnosListComponent } from './alumnos/alumnos-list/alumnos-list.component';
import { NuevoAlumnoComponent } from './alumnos/nuevo-alumno/nuevo-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListComponent,
    NuevoAlumnoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
