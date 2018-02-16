import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';
import { DemoWebsocketService } from '../../services/demo-websocket.service';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {

  public editCarId = 0;
  public cars: Car[] = [];

  public nums: Observable<number>;

  constructor(
    private carsSvc: CarsService,
    private demoWebSocketSvc: DemoWebsocketService,
  ) { }

  public ngOnInit() {
    this.refreshCars();

    // this.nums = this.demoWebSocketSvc.nums().pipe(
    //   map(num => num),
    //   filter(num => num > 10)
    // );

    // this.demoWebSocketSvc.nums().subscribe(num => {
    //   console.log(num);
    // });
  }

  private refreshCars() {
    return this.carsSvc.all().subscribe(cars => this.cars = cars);
  }

  private insertCar(car: Car) {
    return this.carsSvc.insert(car).then(() => this.refreshCars());
  }

  private replaceCar(car: Car) {
    return this.carsSvc.replace(car).then(() => this.refreshCars());
  }

  private doDeleteCar(carId: number) {
    return this.carsSvc.delete(carId).then(() => this.refreshCars());
  }

  private doSaveCar(car: Car) {

    if (car.id) {
      this.replaceCar(car);
    } else {
      this.insertCar(car);
    }

    this.editCarId = 0;

  }

  private doEditCar(carId: number) {
    this.editCarId = carId;
  }

  private doCancelCar() {
    this.editCarId = 0;
  }

}
