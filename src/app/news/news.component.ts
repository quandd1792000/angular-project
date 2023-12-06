import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  startIndex =0;
  endIndex = 1;
  constructor() { }

  ngOnInit(): void {
  }
  isWindowWidthLessThan768: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isWindowWidthLessThan768 = window.innerWidth < 1300;
  }

  postNews = [{stt:'1', url:'assets/image/news/news1.png',date :'25/07/2021',title :'Novopharm kí kết hợp tác toàn diện với trường Cao đẳng Dược Trung Ương Hải Dương',detail:'Lễ ký kết đã diễn ra thành công tốt đẹp với sự tham gia của Tiến sỹ Trần Bá Kiên – Hiệu trưởng, cán bộ quản lý phòng Đào tạo, công tác HSSV, Khảo thí và kiểm định chất lượng, Đoàn TN và Ban kết nối đại diện cho phía Nhà trường; Và về phía công ty có sự tham gia của Ông Nguyễn Long – Giám đốc cùng các đại diện bộ phận nhân sự, ban tổ chức chương '}
  ,{stt:'2',url:'assets/image/news/news2.png',date :'16/05/2021',title :'Vivamus id sapien in libero rhoncus hendrerit id vel velit. Donec id malesuada dui.',detail:'Risus lacus, vel elementum leo interdum in. Aenean consequat convallis rhoncus. Ut non pulvinar turpis. Quisque ac nisi est. Morbi sit amet leo volutpat, euismod nisl eget, molestie diam. Sed nisl ipsum, lacinia vitae malesuada ut, porttitor sit amet velit. Phasellus feugiat risus sed semper suscipit.'}
  ,{stt:'3',url:'assets/image/news/news3.png',date :'30/04/2021',title :'Mauris urna tincidunt velit id aliquet, commodo id aliquet eget, tincidunt ac ipsum.',detail:'Elementum leo interdum in. Aenean consequat convallis rhoncus. Ut non pulvinar turpis. Quisque ac nisi est. Morbi sit amet leo volutpat, euismod nisl eget, molestie diam. Sed nisl ipsum, lacinia vitae malesuada ut, porttitor sit amet velit. Phasellus feugiat risus sed semper suscipit.'}
]
 visiblePostNews= this.postNews.slice(0, 3);
 visiblePostNewsResponsive = this.postNews.slice(this.startIndex, this.endIndex);
 prev() {
  if (this.startIndex > 0) {
    this.startIndex--;
    this.endIndex--;
    this.visiblePostNewsResponsive = this.postNews.slice(this.startIndex, this.endIndex);
  }
}

next() {
  if (this.endIndex < this.postNews.length ) {
    this.startIndex++;
    this.endIndex++;
    this.visiblePostNewsResponsive = this.postNews.slice(this.startIndex, this.endIndex );
  }
}
}
