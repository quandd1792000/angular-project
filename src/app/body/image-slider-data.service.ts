import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageSliderDataService {

  constructor() { }
  images: string[] = [
    'assets/image/picture3.png',
    'assets/image/picture1.png',
    'assets/image/picture2.png'
  ];
  sortDetail: string[] = [
    'Ut molestie, tellus eget sodales dignissim, elit ex feugiat odio',
    'test1 aaaaaa',
    'test2 bbbbbb'

  ];
  currentIndex = 0;

  get currentImage(): string {
    return this.images[this.currentIndex];
  }

  get currentSortDetail(): string {
    return this.sortDetail[this.currentIndex];
  }
  previousImage(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}
