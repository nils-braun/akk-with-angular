import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListWindowComponent } from './wish-list-window.component';

describe('WishListWindowComponent', () => {
  let component: WishListWindowComponent;
  let fixture: ComponentFixture<WishListWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
