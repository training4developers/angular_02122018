import { Component, OnInit, ViewChild, AfterViewInit, Directive, forwardRef } from '@angular/core';
import {
  FormGroup, FormBuilder, AbstractControl,
  Validators, NgForm, NG_ASYNC_VALIDATORS,
  AsyncValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

interface Product {
  id: number;
  serialNumber: number;
  name: string;
}

const serialNumberValidatorFactory = (httpClient: HttpClient) => {

  const serialNumberValidator = (c: AbstractControl) => {
    return httpClient
      .get<Product[]>('http://localhost:3050/products?serialNumber=' + encodeURIComponent(c.value))
      .toPromise()
      .then(products => products.length === 1 ? null : { serialNumber: true });
  };

  return serialNumberValidator;
};

@Directive({
  selector: 'input[serial-number][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => SerialNumberValidatorDirective),
      multi: true,
    },
  ]
})
export class SerialNumberValidatorDirective implements AsyncValidator {

  private validatorFn: (c: AbstractControl) => Promise<any>;

  constructor(private httpClient: HttpClient) {
    this.validatorFn = serialNumberValidatorFactory(this.httpClient);
  }

  validate(c: AbstractControl) {
    return this.validatorFn(c);
  }

}

@Component({
  selector: 'product-support-form',
  templateUrl: './product-support-form.component.html',
  styleUrls: ['./product-support-form.component.css']
})
export class ProductSupportFormComponent implements OnInit, AfterViewInit {

  public form: FormGroup;

  @ViewChild(NgForm)
  productTemplateForm: NgForm;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
  ) {

    this.form = this.fb.group({
      serialNumberInput: [ '', {
        // updateOn: 'submit',
        validators: [ Validators.required ],
        asyncValidators: [ serialNumberValidatorFactory(this.httpClient) ]
      }],
    });

  }

  ngOnInit() {
    console.dir(this.form);
  }

  ngAfterViewInit() {
    console.dir(this.productTemplateForm);
  }

}
