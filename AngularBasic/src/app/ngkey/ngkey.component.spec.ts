import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgkeyComponent } from './ngkey.component';

describe('NgkeyComponent', () => {
  let component: NgkeyComponent;
  let fixture: ComponentFixture<NgkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
