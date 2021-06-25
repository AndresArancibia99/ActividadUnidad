import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  elementos = [{sueldos:1200,notas:50,actividad:'supervisor'},
              {sueldos:1350,notas:60,actividad:'supervisor'},
              {sueldos:1500,notas:70,actividad:'Encargado de obra'},
              {sueldos:1250,notas:50,actividad:'Encargado de obra'},
              {sueldos:2500,notas:60,actividad:'Encargado de obra'} ]
}
