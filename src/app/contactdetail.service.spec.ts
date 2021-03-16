import { TestBed } from '@angular/core/testing';

import { ContactdetailService } from './contactdetail.service';

describe('ContactdetailService', () => {
  let service: ContactdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
