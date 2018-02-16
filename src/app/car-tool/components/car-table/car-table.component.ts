import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent {

  private localCars: Car[] = [];

  @Input()
  public editCarId = 0;

  @Input()
  public set cars(newCars: Car[]) {
    if (newCars !== this.localCars) {
      this.filterCache = {};
      this.localCars = newCars;
    }
  }

  public makeFilter = '';
  public filterCache: any = {};

  public get filteredCars() {
    if (!this.filterCache[this.makeFilter]) {
      this.filterCache[this.makeFilter] = this.localCars.filter(car =>
        this.makeFilter.length === 0 || car.make.startsWith(this.makeFilter));
    }
    return this.filterCache[this.makeFilter];
  }

  @Output()
  public editCar = new EventEmitter<number>();

  @Output()
  public deleteCar = new EventEmitter<number>();

  @Output()
  public saveCar = new EventEmitter<Car>();

  @Output()
  public cancelCar = new EventEmitter<void>();

  public doEditCar(carId: number) {
    this.editCar.emit(carId);
  }

  public doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

  public doSaveCar(car: Car) {
    this.saveCar.emit(car);
  }

  public doCancelCar() {
    this.cancelCar.emit();
  }
}
