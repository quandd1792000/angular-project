import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-system',
  templateUrl: './product-system.component.html',
  styleUrls: ['./product-system.component.css']
})
export class ProductSystemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  startIndex = 0;
  endIndex = 5;
  startIndexNew = 0;
  endIndexNew = 3;
  isWindowWidthLessThan768: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isWindowWidthLessThan768 = window.innerWidth < 1300;
  }
  productSystem =['assets/image/productSystem/productSystem1.png'
  ,'assets/image/productSystem/productSystem2.png'
  ,'assets/image/productSystem/productSystem3.png'
  ,'assets/image/productSystem/productSystem4.png'
  ,'assets/image/productSystem/productSystem5.png'
  ,'assets/image/productSystem/productSystem6.png']

  visibleProductSystem = this.productSystem.slice(this.startIndex, this.endIndex + 1);
  visibleProductSystemNew = this.productSystem.slice(this.startIndexNew, this.endIndexNew );

  prevSellingProduct() {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.endIndex--;
      this.visibleProductSystem = this.productSystem.slice(this.startIndex, this.endIndex + 1);
    }
  }

  nextSellingProduct() {
    if (this.endIndex < this.productSystem.length - 1) {
      this.startIndex++;
      this.endIndex++;
      this.visibleProductSystem = this.productSystem.slice(this.startIndex, this.endIndex + 1);
    }
  }

  prevSellingProductNew() {
    if (this.startIndexNew > 0) {
      this.startIndexNew--;
      this.endIndexNew--;
      this.visibleProductSystemNew = this.productSystem.slice(this.startIndexNew, this.endIndexNew);
    }
  }

  nextSellingProductNew() {
    if (this.endIndexNew < this.productSystem.length ) {
      this.startIndexNew++;
      this.endIndexNew++;
      this.visibleProductSystemNew = this.productSystem.slice(this.startIndexNew, this.endIndexNew);
    }
  }

}
