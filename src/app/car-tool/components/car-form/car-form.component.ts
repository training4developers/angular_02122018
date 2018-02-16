import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent implements OnInit {

  public carForm: FormGroup = null;

  @Output()
  public submitCar = new EventEmitter<Car>();

  constructor(
    private fb: FormBuilder,
  ) { }

  public ngOnInit() {

    this.carForm = this.fb.group({
      make: ['', Validators.required ],
      model: ['', Validators.required],
      year: [1900, Validators.required],
      color: [''],
      price: [0],
    });
  }

  public doSubmitCar() {

    console.log(this.carForm.value);

    if (this.carForm.valid) {
      this.submitCar.emit({ ...this.carForm.value });
      this.carForm.reset();
    } else {
      console.log('please fix the form');
    }


  }

}
