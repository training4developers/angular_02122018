import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  public cars: Car[] = [];

  @Output()
  public removeCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteCar(carId: number) {
    this.removeCar.emit(carId);
  }

}
