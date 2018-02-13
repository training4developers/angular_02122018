import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'tr[view-car-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input()
  public car: Car = null;

  @Output()
  public removeCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteCar(carId: number) {
    this.removeCar.emit(carId);
  }

}
