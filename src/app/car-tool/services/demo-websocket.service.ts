import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DemoWebsocketService {

  constructor() { }

  nums(): Observable<number> {

    return Observable.create(observer => {
      // const ws = new WebSocket('ws://localhost:3030');
      // ws.addEventListener('message', function(msg) {
      //   observer.next(Number(msg.data));
      // });
    });

  }

}
