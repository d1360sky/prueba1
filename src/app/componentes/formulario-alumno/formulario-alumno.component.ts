import { Component, Output, EventEmitter} from '@angular/core';
import {Alumno} from 'src/app/modelos/alumno'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output() public salidaAlumno = new EventEmitter<Alumno>();
  public nuevoAlumno:Alumno ={
    rut:'',
    nombre:'',
    apellido:'',
    edad: 0,
    seccion:{
      nombre:'',
      id:0
    }
  }

  public cambiarRut(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.rut = elemento.value;
  }

  public cambiarNombre(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.nombre = elemento.value;
  }

  public cambiarApellido(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.apellido = elemento.value;
  }

  public cambiarEdad(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.edad = parseInt(elemento.value);
  }

  public registrarAlumno():void{
    const copia: Alumno = {
      ...this.nuevoAlumno
    }
    this.salidaAlumno.emit(copia);
    this.nuevoAlumno.rut = '';
    this.nuevoAlumno.nombre = '';
    this.nuevoAlumno.apellido = '';
    this.nuevoAlumno.edad = 0;
    this.nuevoAlumno.seccion.id = 0;
    this.nuevoAlumno.seccion.nombre = ''
  }
}
