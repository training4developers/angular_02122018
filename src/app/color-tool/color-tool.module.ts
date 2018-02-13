import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  declarations: [ColorHomeComponent, ToolHeaderComponent],
  // exports the component to be used in a template outside of the module
  exports: [ColorHomeComponent],
})
export class ColorToolModule { }
