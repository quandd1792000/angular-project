import { Component, OnInit } from '@angular/core';
import { ImageSliderDataService } from './image-slider-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private imageSliderService: ImageSliderDataService) { }

  ngOnInit(): void {
  }

  previousImage(): void {
    this.imageSliderService.previousImage();
  }

  nextImage(): void {
    this.imageSliderService.nextImage();
  }

  get currentImage(): string {
    return this.imageSliderService.currentImage;
  }
  get currentSortDetail(): string {
    return this.imageSliderService.currentSortDetail;
  }
}

