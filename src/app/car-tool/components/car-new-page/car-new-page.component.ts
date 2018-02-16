import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'car-new-page',
  templateUrl: './car-new-page.component.html',
  styleUrls: ['./car-new-page.component.css']
})
export class CarNewPageComponent {

  constructor(
    private carsSvc: CarsService,
    private router: Router,
  ) { }

  private doInsertCar(car: Car) {
    return this.carsSvc.insert(car)
      .then(() => this.router.navigate(['car-tool', 'home']));
  }

}
