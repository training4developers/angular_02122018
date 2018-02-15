import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../models/car';

class CarsService {

  private cars: Car[] = [
    { id: 1, make: 'Chevrolet', model: 'Volt', year: 2017, color: 'blue', price: 21000.00 },
    { id: 2, make: 'Ford', model: 'Bolt', year: 2018, color: 'red', price: 31000.00 },
    { id: 3, make: 'Lexus', model: 'Volt', year: 2017, color: 'blue', price: 21000.00 },
    { id: 4, make: 'Ford', model: 'Bolt', year: 2018, color: 'red', price: 31000.00 },
  ];

  all() {
    return this.cars;
  }

}

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
  providers: [ CarsService ],
})
export class CarHomeComponent {

  public editCarId = 0;
  public cars: Car[];

  constructor(private carsSvc: CarsService) { }

  private insertCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id)) + 1,
    });
  }

  private replaceCar(car: Car) {

    const carIndex = this.cars.findIndex(c => c.id === car.id);

    this.cars = [
      ...this.cars.slice(0, carIndex),
      car,
      ...this.cars.slice(carIndex + 1),
    ];
  }

  private doDeleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
  }

  private doSaveCar(car: Car) {

    if (car.id) {
      this.replaceCar(car);
    } else {
      this.insertCar(car);
    }

    this.editCarId = 0;

  }

  private doEditCar(carId: number) {
    this.editCarId = carId;
  }

  private doCancelCar() {
    this.editCarId = 0;
  }

}
