import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactFormComponent, PhoneValidatorDirective } from './components/contact-form/contact-form.component';
import {
  ProductSupportFormComponent,
  SerialNumberValidatorDirective
} from './components/product-support-form/product-support-form.component';
import { SignupsFormComponent } from './components/signups-form/signups-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
  ],
  declarations: [
    ContactFormComponent, PhoneValidatorDirective, ProductSupportFormComponent,
    SerialNumberValidatorDirective, SignupsFormComponent],
  exports: [ContactFormComponent, ProductSupportFormComponent, SignupsFormComponent],
})
export class FormDemoModule { }
