import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';

const localCars = {
  _cars: [ {
    id: 1, make: 'Tesla', model: 'S',
    year: 2017, color:'blue', price: 100.00
  }],

  all() {
    return this._cars;
  }
};

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent {

  public editCarId = 0;
  public cars: Car[];

  constructor(private carsSvc: CarsService) {

    console.log(this.carsSvc.all());
  }

  public ngOnInit() {
    this.carsSvc.all().then(cars => {
      this.cars = cars;
    });
  }

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
