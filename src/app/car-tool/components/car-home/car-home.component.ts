import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  public message = 'Car Tool';

  public carForm: FormGroup;

  public cars: Car[] = [
    { id: 1, make: 'Chevrolet', model: 'Volt', year: 2017, color: 'blue', price: 21000.00 },
    { id: 2, make: 'Chevrolet', model: 'Bolt', year: 2018, color: 'red', price: 31000.00 },
  ];

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.carForm = this.fb.group({
      make: [ '' ],
      model: [ '' ],
      year: [ 1900 ],
      color: [ '' ],
      price: [ 0 ],
    });
  }

  addCar() {

    this.cars = this.cars.concat({
      id: Math.max(...this.cars.map(c => c.id)) + 1,
      make: this.carForm.value.make,
      model: this.carForm.value.model,
      year: this.carForm.value.year,
      color: this.carForm.value.color,
      price: this.carForm.value.price,
    });
  }

}
