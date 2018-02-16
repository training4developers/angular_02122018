import { Component, OnInit } from '@angular/core';

import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  public colors: Color[] = [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'green' },
  ];

  public age = 104;


  ngOnInit() {
  }

  addColor(newColor: Color) {
    this.colors = this.colors.concat({
      id: Math.max(...this.colors.map(c => c.id)) + 1,
      ...newColor
    });
  }

  showValue(someValue: any) {
    console.log(someValue);
  }

}
