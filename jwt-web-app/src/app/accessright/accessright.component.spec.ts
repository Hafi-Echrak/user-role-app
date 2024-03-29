import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessrightComponent } from './accessright.component';

describe('AccessrightComponent', () => {
  let component: AccessrightComponent;
  let fixture: ComponentFixture<AccessrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
