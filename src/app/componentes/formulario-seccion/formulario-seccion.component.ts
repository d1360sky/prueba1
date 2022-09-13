import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output() public salidaSeccion = new EventEmitter<Seccion>();
  public nuevaSeccion:Seccion ={
    id:1,
    nombre:''
  }

  public cambiarSeccion(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevaSeccion.nombre = elemento.value;
  }

  public registrarSeccion():void{
    const copia: Seccion = {
      ...this.nuevaSeccion
    }
    this.salidaSeccion.emit(copia);
    this.nuevaSeccion.nombre='';

  }

}
