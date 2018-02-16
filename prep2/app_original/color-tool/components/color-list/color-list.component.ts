import { Component, OnInit, Input } from '@angular/core';

import { Color } from '../../models/color';

@Component({
  selector: 'color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input()
  colorList: Color[] = [];

  constructor() { }

  ngOnInit() {
  }

}
