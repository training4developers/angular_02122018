import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'signups-form',
  templateUrl: './signups-form.component.html',
  styleUrls: ['./signups-form.component.css']
})
export class SignupsFormComponent implements OnInit {

  public form: FormGroup;

  public createSignupForm() {
    return this.fb.group({
      name: '',
      email: '',
      firstTime: false,
    });
  }

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      signups: this.fb.array([]),
    });

    console.dir(this.form);

  }

  ngOnInit() {
  }

  addSignup() {
    const signups = this.form.controls.signups as FormArray;
    signups.push(this.createSignupForm());
  }

  showSignups() {
    console.dir(this.form.value);
  }

}
