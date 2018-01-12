import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceEditWindowComponent } from './dance-edit-window.component';

describe('DanceEditWindowComponent', () => {
  let component: DanceEditWindowComponent;
  let fixture: ComponentFixture<DanceEditWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceEditWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceEditWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
