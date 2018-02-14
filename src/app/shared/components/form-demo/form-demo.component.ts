import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit, AfterViewInit {

  @ViewChild(NgForm)
  public theForm: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.theForm);
  }

}
