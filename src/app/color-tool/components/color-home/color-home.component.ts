import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  public message = 'Color Tool';

  public colors = [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'green' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
