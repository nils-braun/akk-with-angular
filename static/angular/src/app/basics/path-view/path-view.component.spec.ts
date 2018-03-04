import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathViewComponent } from './path-view.component';

describe('PathViewComponent', () => {
  let component: PathViewComponent;
  let fixture: ComponentFixture<PathViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
