import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessRightComponent } from './add-access-right.component';

describe('AddAccessRightComponent', () => {
  let component: AddAccessRightComponent;
  let fixture: ComponentFixture<AddAccessRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccessRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccessRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
