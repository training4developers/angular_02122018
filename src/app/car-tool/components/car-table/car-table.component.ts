import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent {

  @Input()
  public editCarId = 0;

  @Input()
  public cars: Car[] = [];

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
