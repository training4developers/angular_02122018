import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  public firstName = 'riad';
  public amount = 2030;
  public currentDate = new Date();
  public colors = [ 'red', 'blue', 'green', 'yellow', 'black' ];
  public person = { firstName: 'Bob', lastName: 'Smith' };

  constructor() { }

  ngOnInit() {
  }

}
