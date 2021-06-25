import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azar',
  templateUrl: './azar.component.html',
  styleUrls: ['./azar.component.css']
})
export class AzarComponent implements OnInit {

  valor! : number
  list: Array<number> = [];
  constructor() { }

  ngOnInit(): void {
  
  }
  Aleatorio(){
    this.valor = Math.trunc(Math.random()*25) + 1;
    while(this.list.includes(this.valor) ){
      this.valor = Math.trunc(Math.random()*25) + 1;
    }
    this.list.push(this.valor);
  }
}
