import { Component } from '@angular/core';

@Component({
  selector: 'app-actividad1',
  templateUrl: './actividad1.component.html',
  styleUrls: ['./actividad1.component.css']
})
export class Actividad1Component  {

 
  nombre = 'Andres Arancibia';
  
  notas = [50, 60, 70, 50, 60];
  sueldos = [1200, 1350, 1500, 1250, 2500]
  actividades = ['supervisor', 'supervisor', 'Encargado de obra', 'Encargado de obra', 'Encargado de obra']
  listas = [this.notas, this.sueldos, this.actividades];
}
