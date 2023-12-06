import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionforuserComponent } from './functionforuser.component';

describe('FunctionforuserComponent', () => {
  let component: FunctionforuserComponent;
  let fixture: ComponentFixture<FunctionforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionforuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
