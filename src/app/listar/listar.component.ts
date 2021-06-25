import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  abc:Array<String> = ['AAA', 'BBB', 'CCC']
  cde:Array<String> = ['CCC', 'DDD', 'EEE']
  constructor() { }

  ngOnInit(): void {
  }

}
