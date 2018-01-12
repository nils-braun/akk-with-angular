import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelListViewComponent } from './label-list-view.component';

describe('LabelListViewComponent', () => {
  let component: LabelListViewComponent;
  let fixture: ComponentFixture<LabelListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
