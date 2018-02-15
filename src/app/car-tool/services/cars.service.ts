import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/car';

@Injectable()
export class CarsService {

  constructor(
    private httpClient: HttpClient,
  ) {
    console.log('CarsService instantiated');
  }

  // private cars: Car[] = [
  //   { id: 1, make: 'Chevrolet', model: 'Volt', year: 2017, color: 'blue', price: 21000.00 },
  //   { id: 2, make: 'Ford', model: 'Bolt', year: 2018, color: 'red', price: 31000.00 },
  //   { id: 3, make: 'Lexus', model: 'Volt', year: 2017, color: 'blue', price: 21000.00 },
  //   { id: 4, make: 'Ford', model: 'Bolt', year: 2018, color: 'red', price: 31000.00 },
  // ];

  all() {
    // use httpClient to get my cars
    return this.httpClient.get<Car[]>('http://localhost:3050/cars').toPromise();
    //return this.cars;
  }

}
