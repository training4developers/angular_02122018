import { TestBed, inject } from '@angular/core/testing';

import { DemoWebsocketService } from './demo-websocket.service';

describe('DemoWebsocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoWebsocketService]
    });
  });

  it('should be created', inject([DemoWebsocketService], (service: DemoWebsocketService) => {
    expect(service).toBeTruthy();
  }));
});
