import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css']
})
export class ToolHeaderComponent implements OnInit {

  @Input()
  public headerText = '';

  constructor() { }

  ngOnInit() {
  }

}
