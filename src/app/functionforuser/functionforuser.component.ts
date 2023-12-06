import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-functionforuser',
  templateUrl: './functionforuser.component.html',
  styleUrls: ['./functionforuser.component.css']
})
export class FunctionforuserComponent implements OnInit {

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
}
