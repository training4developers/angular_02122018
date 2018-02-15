import { Injectable } from '@angular/core';

import { Car } from '../models/car';

@Injectable()
export class CarsService {

  constructor() { }

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
