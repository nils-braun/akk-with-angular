import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishEditWindowComponent } from './wish-edit-window.component';

describe('WishEditWindowComponent', () => {
  let component: WishEditWindowComponent;
  let fixture: ComponentFixture<WishEditWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishEditWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishEditWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
