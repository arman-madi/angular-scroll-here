import { TestBed } from '@angular/core/testing';

import { ScrollHereService } from './scroll-here.service';

describe('ScrollHereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollHereService = TestBed.get(ScrollHereService);
    expect(service).toBeTruthy();
  });
});
