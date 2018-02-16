import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'car-home-page',
  templateUrl: './car-home-page.component.html',
  styleUrls: ['./car-home-page.component.css']
})
export class CarHomePageComponent implements OnInit {

  public editCarId = 0;
  public cars: Car[] = [];

  constructor(
    private carsSvc: CarsService,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.refreshCars();
  }

  private refreshCars() {
    return this.carsSvc.all().then(cars => this.cars = cars);
  }

  private doReplaceCar(car: Car) {
    this.editCarId = 0;
    return this.carsSvc.replace(car).then(() => this.refreshCars());
  }

  private doDeleteCar(carId: number) {
    return this.carsSvc.delete(carId).then(() => this.refreshCars());
  }

  private doEditCar(carId: number) {
    this.editCarId = carId;
  }

  private doCancelCar() {
    this.editCarId = 0;
  }

  private doCreateCar() {
    // this.router.navigateByUrl('/car-tool/new');
    this.router.navigate(['car-tool', 'new']).catch(err => {
      console.log(err);
    });
  }

}
