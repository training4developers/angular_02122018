import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { TableRowComponent } from './components/table-row/table-row.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  declarations: [CarHomeComponent, ToolHeaderComponent, TableRowComponent],
  exports: [CarHomeComponent],
})
export class CarToolModule { }
