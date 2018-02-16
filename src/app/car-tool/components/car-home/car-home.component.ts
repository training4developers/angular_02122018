import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {

  public editCarId = 0;
  public cars: Car[] = [];

  constructor(private carsSvc: CarsService) { }

  public ngOnInit() {
    this.refreshCars();
  }

  private refreshCars() {
    return this.carsSvc.all().then(cars => this.cars = cars);
  }

  private insertCar(car: Car) {
    return this.carsSvc.insert(car).then(() => this.refreshCars());
  }

  private replaceCar(car: Car) {
    return this.carsSvc.replace(car).then(() => this.refreshCars());
  }

  private doDeleteCar(carId: number) {
    return this.carsSvc.delete(carId).then(() => this.refreshCars());
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
