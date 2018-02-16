import { Component, OnInit } from '@angular/core';

class LoggerService {
  constructor() { console.log('created a new logger service'); }
  log(msg: string) { console.log(msg); }
}

class AltLoggerService {
  constructor() { console.log('created a new alt logger service'); }
  log(msg: string) { console.log('alt: ' + msg); }
}

const anotherLogger2 = {
  log: function(msg: string) {
    console.log('logger 2: ' + msg);
  }
};

const loggerFactory = () => {
  return new LoggerService();
};

@Component({
  selector: 'service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css'],
  providers: [
    { provide: LoggerService,
      useFactory: loggerFactory },
  ],
})
export class ServiceDemoComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('test');
  }

}
