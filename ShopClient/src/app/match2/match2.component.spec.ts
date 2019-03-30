import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Match2Component } from './match2.component';

describe('Match2Component', () => {
  let component: Match2Component;
  let fixture: ComponentFixture<Match2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Match2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Match2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
