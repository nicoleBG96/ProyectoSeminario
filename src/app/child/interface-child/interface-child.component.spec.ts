import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceChildComponent } from './interface-child.component';

describe('InterfaceChildComponent', () => {
  let component: InterfaceChildComponent;
  let fixture: ComponentFixture<InterfaceChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
