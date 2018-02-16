import { Injectable } from "@angular/core";

import { Car } from "../models/car";

@Injectable()
export class Cars {

  getAll(): Car[] {
    return [
      { id: 1, make: 'Ford', model: 'Fusion', color:'yellow', year: 2013, price: 12000 },
      { id: 2, make: 'Ford', model: 'F150', color:'purple', year: 2014, price: 34000 },
    ];
  }

}