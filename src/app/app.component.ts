import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';
import { Seccion } from './modelos/seccion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evaluacion1';
  public alumnos:Array<Alumno> = [];
  public seccion:Array<Seccion> = [];


  public nuevoAlumno(nuevo:Alumno):void{
    this.alumnos.push(nuevo);
  }

  public nuevaSeccion(seccion:Seccion):void{
    const id:number = this.seccion.length+1;
    seccion.id = id;
    this.seccion.push(seccion);

  }

}
