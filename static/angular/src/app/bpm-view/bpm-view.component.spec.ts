import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmViewComponent } from './bpm-view.component';

describe('BpmViewComponent', () => {
  let component: BpmViewComponent;
  let fixture: ComponentFixture<BpmViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
