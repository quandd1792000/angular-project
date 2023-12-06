import { TestBed } from '@angular/core/testing';

import { ImageSliderDataService } from './image-slider-data.service';

describe('ImageSliderDataService', () => {
  let service: ImageSliderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSliderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
