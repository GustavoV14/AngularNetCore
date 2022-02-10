import { TestBed } from '@angular/core/testing';
import { RemoteService } from './Remote.service';



describe('RemoteService', () => {
  let service: RemoteServicee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
