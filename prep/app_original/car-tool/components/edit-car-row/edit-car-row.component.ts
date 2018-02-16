import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: 'tr[edit-car-row]',
  templateUrl: './edit-car-row.component.html',
  styleUrls: ['./edit-car-row.component.css']
})
export class EditCarRowComponent implements OnInit {

  public editCarForm: FormGroup = null;

  @Input()
  public car: Car = null;

  @Output()
  public saveCar = new EventEmitter<Car>();

  @Output()
  public cancelCar = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
    this.editCarForm = this.fb.group({
      make: [this.car.make],
      model: [this.car.model],
      year: [this.car.year],
      color: [this.car.color],
      price: [this.car.price],
    });
  }

  public doSaveCar() {
    this.saveCar.emit({
      ...this.editCarForm.value,
      id: this.car.id,
    });
  }

  public doCancelCar() {
    this.cancelCar.emit();
  }

}
