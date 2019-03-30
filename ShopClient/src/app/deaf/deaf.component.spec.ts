import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeafComponent } from './deaf.component';

describe('DeafComponent', () => {
  let component: DeafComponent;
  let fixture: ComponentFixture<DeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
