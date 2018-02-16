import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CarToolRouterModule } from './car-tool.routing';

import { AuthorizationTokenService } from './services/authorization-token.service';
import { CarsService } from './services/cars.service';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ViewCarRowComponent } from './components/view-car-row/view-car-row.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { EditCarRowComponent } from './components/edit-car-row/edit-car-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarHomePageComponent } from './components/car-home-page/car-home-page.component';
import { CarNewPageComponent } from './components/car-new-page/car-new-page.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    FormsModule , CarToolRouterModule
  ],
  declarations: [
    CarHomeComponent, ToolHeaderComponent,
    CarFormComponent, CarTableComponent,
    ViewCarRowComponent, EditCarRowComponent, CarHomePageComponent, CarNewPageComponent,
  ],
  exports: [ CarHomeComponent ],
  providers: [ AuthorizationTokenService, CarsService ],
})
export class CarToolModule { }
