import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  public colorForm: FormGroup;

  @Output()
  public saveColor = new EventEmitter<Color>();

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

  public submitColor() {
    this.saveColor.emit({
      name: this.colorForm.value.colorName,
    });
  }

}
