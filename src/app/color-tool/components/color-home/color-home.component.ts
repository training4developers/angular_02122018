import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  public message = 'Color Tool';

  public colorForm: FormGroup;

  public colors: Color[] = [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'green' },
  ];

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.colorForm = this.fb.group({
      colorName: [ '' ],
    });
  }

  addColor() {
    console.log(this.colorForm.value);
  }

}
