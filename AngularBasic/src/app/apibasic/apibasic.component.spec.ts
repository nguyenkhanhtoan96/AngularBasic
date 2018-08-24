import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIBasicComponent } from './apibasic.component';

describe('APIBasicComponent', () => {
  let component: APIBasicComponent;
  let fixture: ComponentFixture<APIBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
