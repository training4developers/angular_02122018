import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  public carForm: FormGroup = null;

  @Output()
  public submitCar = new EventEmitter<Car>();

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
    this.carForm = this.fb.group({
      make: [''],
      model: [''],
      year: [1900],
      color: [''],
      price: [0],
    });
  }

  public doSubmitCar() {

    this.submitCar.emit({ ...this.carForm.value });
    this.carForm.reset();
  }

}
