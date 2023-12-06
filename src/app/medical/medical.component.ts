import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

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
  startIndex =0;
  endIndex = 1;

  postMedical = [{stt:'1', url:'assets/image/medical/medicalPicture1.png',date :'25/07/2021',title :'Morbi scelerisque sapien non quam consectetur auctor. Aenean eu augue mollis,',detail:'Ut feugiat tincidunt lacus laoreet facilisis. Duis porta risus lacus, vel elementum leo interdum in. Aenean consequat convallis rhoncus. Ut non pulvinar turpis. Quisque ac nisi est. Morbi sit amet leo volutpat, euismod nisl eget, molestie diam. Sed nisl ipsum, lacinia vitae malesuada ut, porttitor sit amet velit. Phasellus feugiat risus sed semper suscipit.'}
  ,{stt:'2',url:'assets/image/medical/medicalPicture2.png',date :'16/05/2021',title :'Vivamus id sapien in libero rhoncus hendrerit id vel velit. Donec id malesuada dui.',detail:'Risus lacus, vel elementum leo interdum in. Aenean consequat convallis rhoncus. Ut non pulvinar turpis. Quisque ac nisi est. Morbi sit amet leo volutpat, euismod nisl eget, molestie diam. Sed nisl ipsum, lacinia vitae malesuada ut, porttitor sit amet velit. Phasellus feugiat risus sed semper suscipit.'}
  ,{stt:'3',url:'assets/image/medical/medicalPicture3.png',date :'30/04/2021',title :'Mauris urna tincidunt velit id aliquet, commodo id aliquet eget, tincidunt ac ipsum.',detail:'Elementum leo interdum in. Aenean consequat convallis rhoncus. Ut non pulvinar turpis. Quisque ac nisi est. Morbi sit amet leo volutpat, euismod nisl eget, molestie diam. Sed nisl ipsum, lacinia vitae malesuada ut, porttitor sit amet velit. Phasellus feugiat risus sed semper suscipit.'}
]
visiblePostMedical= this.postMedical.slice(0, 3);
visiblePostMedicalNew= this.postMedical.slice(this.startIndex, this.endIndex);

 prev() {
  if (this.startIndex > 0) {
    this.startIndex--;
    this.endIndex--;
    this.visiblePostMedicalNew = this.postMedical.slice(this.startIndex, this.endIndex);
  }
}

next() {
  if (this.endIndex < this.postMedical.length ) {
    this.startIndex++;
    this.endIndex++;
    this.visiblePostMedicalNew = this.postMedical.slice(this.startIndex, this.endIndex );
  }
}
}
