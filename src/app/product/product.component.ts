import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showList = false;
  toggleList() {
    this.showList = !this.showList;
  }
  itemsTools: string[] = ['Bổ sung vitamin/ khoáng chất', 'Điều trị mụn', 'Điều trị ho/ Viêm hô hấp', 'Hạ sốt'
    , 'Thuốc bổ mắt/Nhỏ mắt, tai', 'Hỗ trợ tiêu hóa', 'Hỗ trợ tim - gan - bổ não', 'Trị nứt đầu ti/NK Răng miệng',
    'DDVS/Lăn khử mùi', 'Khác'];
  itemsPharmaceutical: string[] = ['Drops - Nhỏ giọt', 'Ống uống', 'Viên uống', 'Kem bôi'];
  itemsUserPersonal: string[] = ['Trẻ sơ sinh/Trẻ nhỏ', 'Trẻ em', 'Người lớn', 'Thai kỳ/Cho con bú', 'Người cao tuổi'];
  itemsSpecialist: string[] = ['Da liễu', 'Nội', 'Nhi', 'Mắt', 'Sản', 'Tai - Mũi - Họng', 'Răng - Hàm - Mặt'];
  selectedOptions: string[] = [];

  onChange(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.selectedOptions.push(value);
    } else {
      const index = this.selectedOptions.indexOf(value);
      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.filterData();
    }
  }
  filterData() {
    console.log('Các mục đã chọn:', this.selectedOptions);
  }


  isWindowWidthLessThan768: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isWindowWidthLessThan768 = window.innerWidth < 1300;
  }



  imagesNewProduct = [
    { url: 'assets/image/newProduct/product1.png', title: 'Lorem asras impiet at ullamcorper lacinia',price:'Giá:Liên hệ' },
    { url: 'assets/image/newProduct/product2.png', title: 'Cras gravida nulla quis finibus tortor' ,price:'Giá:Liên hệ'},
    { url: 'assets/image/newProduct/product3.png', title: 'Duis dictum rhoncus. Praesent pulvinar',price:'Giá:Liên hệ' },
    { url: 'image4.jpg', title: 'Title 4' },
  ];

  startIndex1 =0;
  endIndex1 = 2;

  startIndexResponsive1 =0;
  endIndexResponsive1 = 2;

  startIndex2 =0;
  endIndex2 = 2;

  startIndexResponsive2 =0;
  endIndexResponsive2 = 2;

  startIndex3 =0;
  endIndex3 = 2;

  startIndexResponsive3 =0;
  endIndexResponsive3 = 2;

  visibleNewProduct = this.imagesNewProduct.slice(this.startIndex1, this.endIndex1 + 1);
  visibleNewProductResponsive = this.imagesNewProduct.slice(this.startIndexResponsive1, this.endIndexResponsive1);

  prevNewProduct() {
    if (this.startIndex1 > 0) {
      this.startIndex1--;
      this.endIndex1--;
      this.visibleNewProduct = this.imagesNewProduct.slice(this.startIndex1, this.endIndex1 + 1);
    }
  }

  nextNewProduct() {
    if (this.endIndex1 < this.imagesNewProduct.length - 1) {
      this.startIndex1++;
      this.endIndex1++;
      this.visibleNewProduct = this.imagesNewProduct.slice(this.startIndex1, this.endIndex1 + 1);
    }
  }

  prevNewProductReponsive() {
    if (this.startIndexResponsive1 > 0) {
      this.startIndexResponsive1--;
      this.endIndexResponsive1=this.startIndexResponsive1+1;
      this.visibleNewProductResponsive = this.imagesNewProduct.slice(this.startIndexResponsive1, this.endIndexResponsive1+1 );
    }
  }

  nextNewProductReponsive() {
    if (this.endIndexResponsive1 < this.imagesNewProduct.length - 1) {
      this.startIndexResponsive1=this.endIndexResponsive1;
      this.endIndexResponsive1++;
      this.visibleNewProductResponsive = this.imagesNewProduct.slice(this.startIndexResponsive1, this.endIndexResponsive1 +1);
    }
  }

  imagesSellingProduct = [
    { url: 'assets/image/sellingProduct/product4.png', title: 'Lorem asras impdiet at ullamcorper lac',price:'Giá:Liên hệ' },
    { url: 'assets/image/sellingProduct/product5.png', title: 'Cras gravida nulla quis finibus tortor' ,price:'Giá:Liên hệ'},
    { url: 'assets/image/sellingProduct/produc6.png', title: 'Duis dictum rhoncus. Praesent pulvinar',price:'Giá:Liên hệ' },
    { url: 'image4.jpg', title: 'Title 4' },
  ];


  visibleSellingProduct = this.imagesSellingProduct.slice(this.startIndex2, this.endIndex2 + 1);
  visibleSellingProductResponsive = this.imagesSellingProduct.slice(this.startIndexResponsive2, this.endIndexResponsive2 );

  prevSellingProduct() {
    if (this.startIndex2 > 0) {
      this.startIndex2--;
      this.endIndex2--;
      this.visibleSellingProduct = this.imagesSellingProduct.slice(this.startIndex2, this.endIndex2 + 1);
    }
  }

  nextSellingProduct() {
    if (this.endIndex2 < this.imagesSellingProduct.length - 1) {
      this.startIndex2++;
      this.endIndex2++;
      this.visibleSellingProduct = this.imagesSellingProduct.slice(this.startIndex2, this.endIndex2 + 1);
    }
  }

  prevSellingProductResponsive() {
    if (this.startIndexResponsive2 > 0) {
      this.startIndexResponsive2--;
      this.endIndexResponsive2 = this.startIndexResponsive2+1;
      this.visibleSellingProductResponsive = this.imagesSellingProduct.slice(this.startIndexResponsive2, this.endIndexResponsive2 +1);
    }
  }

  nextSellingProductResponsive() {
    if (this.endIndexResponsive2 < this.imagesSellingProduct.length - 1) {
      this.startIndexResponsive2 = this.endIndexResponsive2;
      this.endIndexResponsive2++;
      this.visibleSellingProductResponsive = this.imagesSellingProduct.slice(this.startIndex2, this.endIndexResponsive2+1 );
    }
  }

  imagesCategoryProduct = [
    { url: 'assets/image/category/product7.png', title: 'Lorem asras impdiet at ullamcorper lac',price:'Giá:Liên hệ' },
    { url: 'assets/image/category/product8.png', title: 'Cras gravida nulla quis finibus tortor' ,price:'Giá:Liên hệ'},
    { url: 'assets/image/category/product9.png', title: 'Duis dictum rhoncus. Praesent pulvinar',price:'Giá:Liên hệ' },
    { url: 'image4.jpg', title: 'Title 4' },
  ];


  visibleCategoryProduct = this.imagesCategoryProduct.slice(this.startIndex3, this.endIndex3 + 1);
  visibleCategoryProductResponsive = this.imagesCategoryProduct.slice(this.startIndexResponsive3, this.endIndexResponsive3);

  prevCategoryProduct() {
    if (this.startIndex3 > 0) {
      this.startIndex3--;
      this.endIndex3--;
      this.visibleCategoryProduct = this.imagesCategoryProduct.slice(this.startIndex3, this.endIndex3 + 1);
    }
  }

  nextCategoryProduct() {
    if (this.endIndex3 < this.imagesCategoryProduct.length - 1) {
      this.startIndex3++;
      this.endIndex3++;
      this.visibleCategoryProduct = this.imagesCategoryProduct.slice(this.startIndex3, this.endIndex3 + 1);
    }
  }

  prevCategoryProductResponsive() {
    if (this.startIndexResponsive3 > 0) {
      this.startIndexResponsive3--;
      this.endIndexResponsive3=this.startIndexResponsive3+1;
      this.visibleCategoryProductResponsive = this.imagesCategoryProduct.slice(this.startIndexResponsive3, this.endIndexResponsive3 +1);
    }
  }

  nextCategoryProductResponsive() {
    if (this.endIndexResponsive3 < this.imagesCategoryProduct.length - 1) {
      this.startIndexResponsive3=this.endIndexResponsive3
      this.endIndexResponsive3++;
      this.visibleCategoryProductResponsive = this.imagesCategoryProduct.slice(this.startIndexResponsive3, this.endIndexResponsive3 +1);
    }
  }
}
