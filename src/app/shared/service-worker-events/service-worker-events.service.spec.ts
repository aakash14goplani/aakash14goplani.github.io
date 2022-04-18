import { TestBed } from '@angular/core/testing';

import { ServiceWorkerEventsService } from './service-worker-events.service';

describe('ServiceWorkerEventsService', () => {
  let service: ServiceWorkerEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWorkerEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
