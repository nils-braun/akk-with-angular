import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceViewComponent } from './dance-view.component';

describe('DanceViewComponent', () => {
  let component: DanceViewComponent;
  let fixture: ComponentFixture<DanceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
