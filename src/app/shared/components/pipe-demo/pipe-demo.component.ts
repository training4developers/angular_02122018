import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  public firstName = 'riad';

  constructor() { }

  ngOnInit() {
  }

}
