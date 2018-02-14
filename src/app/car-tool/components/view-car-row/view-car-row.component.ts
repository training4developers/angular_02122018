import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'tr[view-car-row]',
  templateUrl: './view-car-row.component.html',
  styleUrls: ['./view-car-row.component.css']
})
export class ViewCarRowComponent {

  @Input()
  public car: Car = null;

  @Output()
  public editCar = new EventEmitter<number>();

  @Output()
  public deleteCar = new EventEmitter<number>();

  public doEditCar(carId: number) {
    this.editCar.emit(carId);
  }

  public doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

}
