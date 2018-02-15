import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Cat {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  private cats: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get<Cat[]>('http://localhost:3050/cats').toPromise()
      .then(results => {
        console.dir(results);
        this.cats = results;
      });


  }

}
