import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css']
})
export class AppAboutComponent implements OnInit {

  public id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  goHome() {
    this.router.navigate(['home']);
  }

}
