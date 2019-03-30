import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicaldisableComponent } from './physicaldisable.component';

describe('PhysicaldisableComponent', () => {
  let component: PhysicaldisableComponent;
  let fixture: ComponentFixture<PhysicaldisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicaldisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicaldisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
