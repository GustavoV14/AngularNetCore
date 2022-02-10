import { TestBed } from '@angular/core/testing';
import { RemotePlusService } from './RemotePlus.service';



describe('RemotePlusService', () => {
  let service: RemotePlusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotePlusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
