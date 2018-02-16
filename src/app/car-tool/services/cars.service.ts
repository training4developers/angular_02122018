import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from '../../../environments/environment';

import { Car } from '../models/car';
import { BaseRestService } from './base-rest-service';
import { AuthorizationTokenService } from './authorization-token.service';

@Injectable()
export class CarsService extends BaseRestService {

  public constructor(
    private httpClient: HttpClient,
    @Optional() authorizationToken: AuthorizationTokenService,
  ) {
    super(environment.restUrl, 'cars', authorizationToken.getToken());
  }

  public all() {
    return this.httpClient.get<Car[]>(this.collectionUrl(), this.options()).toPromise();
  }

  public one(id: string | number) {
    return this.httpClient.get<Car>(this.elementUrl(id), this.options()).toPromise();
  }

  public insert(car: Car) {
    return this.httpClient.post<Car>(this.collectionUrl(), car, this.options()).toPromise();
  }

  public replace(car: Car) {
    return this.httpClient.put<Car>(this.elementUrl(car.id), car, this.options()).toPromise();
  }

  public delete(id: string | number) {
    return this.httpClient.delete<Car>(this.elementUrl(id), this.options()).toPromise();
  }
}
